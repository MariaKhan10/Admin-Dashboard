export default {
    name: "order",
    type: "document",
    title: "Orders",
    fields: [
      { name: "customerName", type: "string", title: "Customer Name" },
      { name: "email", type: "string", title: "Email" },
      { name: "phone", type: "string", title: "Phone Number" },
      { name: "address", type: "string", title: "Shipping Address" },
      { name: "cartItems", type: "array", title: "Cart Items", of: [{ type: "object", fields: [
        { name: "name", type: "string", title: "Item Name" },
        { name: "price", type: "number", title: "Price" },
        { name: "quantity", type: "number", title: "Quantity" }
      ]}]},
      { name: "paymentMethod", type: "string", title: "Payment Method" },
      { name: "totalAmount", type: "number", title: "Total Amount" },
      { name: "status", type: "string", title: "Order Status", options: { list: ["Pending", "Completed", "Cancelled"] } },
    ]
  };
  