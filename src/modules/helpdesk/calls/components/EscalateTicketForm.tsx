"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Listbox, ListboxOption, ListboxOptions } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const levels = [
  { label: "Manager 1", value: "manager1" },
  { label: "Manager 2", value: "manager2" },
  { label: "Manager 3", value: "manager3" },
  { label: "Manager 4", value: "manager4" },
  { label: "Manager 5", value: "manager5" },
];

const FormSchema = z.object({
  level: z.string().nonempty("Select a level"),
  remarks: z.string().min(5, "Remarks too short"),
});

export default function EscalateTicketForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      level: "",
      remarks: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log("SUBMIT:", values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border rounded-xl p-6 space-y-6"
      >
        <h3 className="font-semibold text-lg">Escalate Ticket</h3>

        {/* ==============================
            LEVEL SELECT (HEADLESS UI)
        ============================== */}
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Level *</FormLabel>
              <FormControl>
                <Listbox value={field.value} onChange={field.onChange}>
                  <div className="relative mt-1">
                    <Listbox.Button className="w-full h-12 border rounded-md px-3 flex items-center justify-between text-left text-sm">
                      {field.value
                        ? levels.find((l) => l.value === field.value)?.label
                        : "Select a level to escalate to"}
                      <ChevronDown className="size-4 opacity-50" />
                    </Listbox.Button>

                    <ListboxOptions className="absolute mt-1 w-full bg-white rounded-md shadow-lg border z-50 py-1">
                      {levels.map((lvl) => (
                        <ListboxOption
                          key={lvl.value}
                          value={lvl.value}
                          className={({ active }) =>
                            `cursor-pointer px-4 py-2 text-sm flex justify-between items-center ${
                              active ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span>{lvl.label}</span>
                              {selected && (
                                <Check className="size-4 text-blue-600" />
                              )}
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </FormControl>
            </FormItem>
          )}
        />

        {/* ==============================
            TEXTAREA FIELD
        ============================== */}
        <FormField
          control={form.control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remarks *</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-28 resize-none"
                  placeholder="e.g., Laptop overheating during operation."
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Escalate Ticket
        </Button>
      </form>
    </Form>
  );
}
