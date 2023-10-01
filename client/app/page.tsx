import "./globals.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-10 flex flex-col items-center mb-6">
        <div className="relative w-1/4 mb-4">
          <input
            type="text"
            placeholder="Search Inventory..."
            className="py-2 px-4 w-full border bg-gray-100 rounded-full shadow-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 pl-10"
          />
          <span className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="flex justify-end w-full" style={{ marginRight: "5cm" }}>
          <Link href="/addInv">
            <Button>Add Inventory</Button>
          </Link>
        </div>
      </div>
      <Table className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <TableHeader>
          <TableRow className="bg-gray-100">
            {[
              "SKU",
              "Name",
              "Available Stock",
              "Re-Order Level",
              "Alert Quantity",
              "Unit Price",
              "Stock Value",
              "Product Image",
            ].map((header, idx) => (
              <TableHead
                key={idx}
                className="text-center py-3 px-4 font-semibold"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium text-center">
                  INV00{idx + 1}
                </TableCell>
                <TableCell className="text-center">Product {idx + 1}</TableCell>
                <TableCell className="text-center">{30 + idx}</TableCell>
                <TableCell className="text-center">10</TableCell>
                <TableCell className="text-center">5</TableCell>
                <TableCell className="text-center">$250.00</TableCell>
                <TableCell className="text-center">
                  ${(250 * (30 + idx)).toFixed(2)}
                </TableCell>
                <TableCell className="text-center text-gray-400">
                  No Image
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="text-center">
        <p className="text-xl font-semibold">
          A list of your recent Inventory Items.
        </p>
      </div>
    </>
  );
}
