"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InvForm = () => {
  const [formData, setFormData] = useState({
    inv_pro_name: "",
    sku: "",
    inv_pro_description: "",
    inv_pro_cost: "",
    inv_pro_selling: "",
    inv_pro_quantity: "",
    inv_pro_reorder_level: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log("Item added successfully");
      } else {
        // Handle error cases, e.g., show an error message
        console.error("Error adding item to inventory");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-[1000px] p-6 rounded-lg shadow-lg bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold mb-2">
            Product Information
          </CardTitle>
          <CardDescription>Enter details about the product.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="pro_name">Product Name</Label>
                <Input
                  id="inv_pro_name"
                  name="inv_pro_name"
                  placeholder="Enter product name"
                  value={formData.inv_pro_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="sku">Product SKU</Label>
                <Input
                  id="sku"
                  name="sku"
                  placeholder="Enter product SKU"
                  value={formData.sku}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inv_pro_description">Description</Label>
                <Input
                  id="inv_pro_description"
                  name="inv_pro_description"
                  placeholder="Enter product description"
                  value={formData.inv_pro_description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inv_pro_cost">Cost Price</Label>
                <Input
                  id="inv_pro_cost"
                  name="inv_pro_cost"
                  placeholder="Enter product cost"
                  value={formData.inv_pro_cost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inv_pro_selling">Selling Price</Label>
                <Input
                  id="inv_pro_selling"
                  name="inv_pro_selling"
                  placeholder="Enter product selling price"
                  value={formData.inv_pro_selling}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inv_pro_quantity">Quantity</Label>
                <Input
                  id="inv_pro_quantity"
                  name="inv_pro_quantity"
                  placeholder="Enter product quantity"
                  value={formData.inv_pro_quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inv_pro_reorder_level">Re-Order Level</Label>
                <Input
                  id="inv_pro_reorder_level"
                  name="inv_pro_reorder_level"
                  placeholder="Enter product re-order level"
                  value={formData.inv_pro_reorder_level}
                  onChange={handleInputChange}
                />
              </div>
              {/* <div className="col-span-2 space-y-1.5">
                <Label htmlFor="productImage">Product Image</Label>
                <div className="flex items-center">
                  <input type="file" id="productImage" className="hidden" />
                  <label
                    htmlFor="productImage"
                    className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition duration-200"
                  >
                    Upload Image
                  </label>
                </div>
              </div> */}
            </div>
            <CardFooter className="text-center mt-6">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
              >
                Save
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvForm;
