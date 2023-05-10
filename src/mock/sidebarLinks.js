import {
  CalendarDaysIcon,
  PlusCircleIcon,
  Square2StackIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export const mainLinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: Square2StackIcon,
  },

  {
    title: "Bookings",
    url: "/bookings",
    icon: CalendarDaysIcon,
  },
  {
    title: "Vehicles",
    url: "/vehicles",
    icon: TruckIcon,
  },
];

export const secondaryLinks = [
  {
    title: "Book a slot",
    url: "/bookings/new",
    icon: PlusCircleIcon,
  },
  {
    title: "Add vehicle",
    url: "/vehicles/new",
    icon: PlusCircleIcon,
  },
];

export const utilLinks = [];
