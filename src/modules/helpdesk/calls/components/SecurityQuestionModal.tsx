"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

interface SecurityQuestionModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void; // <-- NEW
}

export default function SecurityQuestionModal({
  open,
  onClose,
  onSuccess,
}: SecurityQuestionModalProps) {
  const [userId, setUserId] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    if (!userId.trim()) return;

    // show result
    setShowResult(true);

    // if already showing result, treat as “Save & Continue”
    if (showResult) {
      onSuccess(); // notify parent
      onClose(); // close modal
    }
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b">
                  <Dialog.Title className="text-lg font-semibold">
                    Security Question
                  </Dialog.Title>
                  <button onClick={onClose}>
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <p className="text-sm text-gray-600 mt-3 mb-5">
                  Check if caller information provided match with their profile
                </p>

                {/* Input */}
                <label className="text-sm font-medium">User ID *</label>
                <input
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                    setShowResult(false);
                  }}
                  placeholder="E.g email address, staff ID, user ID…"
                  className="w-full border rounded-lg px-4 py-3 mt-1 text-sm outline-blue-500"
                />

                {showResult && (
                  <div className="mt-5 p-4 bg-gray-100 rounded-xl border space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/profile.png"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">
                          jondoe@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-700 space-y-1">
                      <p>
                        <span className="font-medium">
                          Mother’s maiden name:
                        </span>{" "}
                        Tayo
                      </p>
                      <p>
                        <span className="font-medium">
                          Registration Office:
                        </span>{" "}
                        Ipaja
                      </p>
                      <p>
                        <span className="font-medium">Last place of work:</span>{" "}
                        Tomilies group
                      </p>
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-lg border text-red-500 border-red-300 hover:bg-red-50"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSearch}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {showResult ? "Save and Continue" : "Search"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
