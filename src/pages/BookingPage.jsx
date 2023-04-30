import {
  ArchiveBoxIcon,
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function BookingPage() {
  return (
    <main className="m-6 bg-white py-6 px-20 shadow-md">
      <h4 className="font-semibold">Booking Details</h4>

      <h1 className="font-bold text-4xl my-4"> Slot No. 2 </h1>
      {/* Utils */}
      <div className="flex items-center font-semibold space-x-10">
        <div className="flex items-center space-x-2">
          <ChatBubbleBottomCenterIcon className="h-5 w-5" />
          <span className="text-gray-500 text-sm">Leave a note</span>
        </div>

        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5" />
          <span className="text-gray-500 text-sm">Add to calendar</span>
        </div>
      </div>

      <section className="my-10">
        <div className="bg-[#F4F6FA] rounded py-2 px-6 flex items-center space-x-3 font-semibold">
          <ChevronDownIcon className="h-4 w-4" />
          <h5>Details</h5>
        </div>

        <div className="px-10">
          <div className="flex items-center space-x-1">
            <ArchiveBoxIcon className="h-4 w-4" />
            Agency:
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
