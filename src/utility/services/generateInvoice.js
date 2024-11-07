const generateHtml = (data) => {
    // Extract order details from data
    const orderDetails = data.orderDetails;
    const storeData = data.storeData;
    
    // Calculate necessary values
    let subtotal = 0;
    let itemsRows = '';

    orderDetails.items.forEach(item => {
        const amount = item.quantity * item.price;
        subtotal += amount;
        itemsRows += `
            <tr class="bill-details">
                <td>${item.item_name}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td>₹${amount.toFixed(2)}</td>
            </tr>
        `;
    });

    const gstAmount = (subtotal * orderDetails.tax) / 100;
    const roundOff = 0.01; // Example round off value
    const grandTotal = subtotal + gstAmount + roundOff;

    // Now, construct the final HTML string
    return `
    
    <head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        td{
          word-wrap: break-word;
          white-space: normal;
        }
        .thora-khisakle{
          margin-bottom: 3px;
        }
        .aage-khisakle{
          margin-right: 20px;
        }
        .address-khisak{
          word-wrap: break-word;
          white-space: normal;
        }
        .bill-container {
            width: 80mm;
            margin: 40px auto;
            padding: 10px;
            background-color: #fff;
            border: 1px solid #000;
        }
        .bill-header,
        .bill-footer {
            text-align: center;
            font-size: 14px;
            color: #000;
        }
        .bill-header .store-name {
            font-size: 18px;
            font-weight: bold;
        }
        .bill-header,.store-address .bill-header .store-phone, .bill-header .gst {
            font-size: 14px;
        }
        .bill-details {
            font-size: 14px;
            color: #000;
            margin-bottom: 10px;
        }
        .table-container {
            width: 100%;
            margin-bottom: 10px;
            border-collapse: collapse;
        }
        .table-container td, .table-container th {
            padding: 8px;
            text-align: center;
        }
        .table-container th {
            background-color: #f4f4f4;
            font-weight: bold;
            font-size: 12px;
        }
        .table-container td {
            font-size: 12px;
        }
        .total {
            text-align: right;
            font-size: 14px;
            margin-bottom: 10px;
            color: #000;
        }
        .grand-total {
            font-size: 16px;
            font-weight: bold;
            color: #000;
        }
        .divider {
            border-top: 1px solid #000;
            margin: 10px 0;
        }
        .text-center {
            text-align: center;
        }
        .text-right {
            text-align: right;
        }
    </style>
</head>
    <body>
        <div class="bill-container">
            <div class="bill-header">
                <div class="store-name thora-khisakle">${storeData.name}</div>
                <div class="store-address thora-khisakle address-khisak">${storeData.address}</div>
                <div class="store-phone thora-khisakle">Phone: ${storeData.phoneNumber}</div>
                <div class="gst thora-khisakle">GSTIN: ${storeData.gst}</div>
            </div>

            <div class="divider"></div>

            <div class="bill-details">
                <div class="thora-khisakle">Name: ${data.customerName}</div>
            </div>

            <div class="divider"></div>

            <table style="width: 100%; border-collapse: collapse;">
                <tr class="bill-details">
                    <td>Date:</td>
                    <td class="bill-details">${new Date().toLocaleString()}</td>
                    <td><strong>Bill No:</strong></td>
                    <td>${data.orderNumber}</td>
                </tr>
                <tr class="bill-details">
                    <td>Cashier:</td>
                    <td>${data.cashier}</td>
                    <td>Table No:</td>
                    <td>${data.tableNumber}</td>
                </tr>
            </table>

            <div class="divider"></div>

            <table class="table-container">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody id="items-list">
                    ${itemsRows}
                </tbody>
            </table>

            <div class="divider"></div>

            <div class="total">
                Sub Total: ₹${subtotal.toFixed(2)}
            </div>
            <div class="total">
                GST (5%): ₹${gstAmount.toFixed(2)}
            </div>
            <div class="divider"></div>
            <div class="total">
                Round Off: ₹${roundOff.toFixed(2)}
            </div>
            <div class="total grand-total">
                Grand Total: ₹${grandTotal.toFixed(2)}
            </div>

            <div class="divider"></div>

            <div class="bill-footer">
                Thank You! Visit Again...
            </div>
        </div>

        <button onclick="generateBill()">Download Bill</button>
    </body>
    `;
};

// Example data
const data = {
    orderDetails: {
        items: [
            { item_name: "Mutton Handi 250g with paramsda", quantity: 2, price: 150 },
            { item_name: "Fries", quantity: 1, price: 100 },
            { item_name: "Coke", quantity: 3, price: 50 }
        ],
        tax: 5, // GST in percentage
        total: 650.01
    },
    storeData: {
        name: "East Champaran Meat House",
        address: "Har Har mahasddsdd sdsddev vhauk 123 Main Street, City, Country",
        phoneNumber: "+1234567890",
        gst: "ABCDE1234F"
    },
    customerName: "Ram Vilas Paswan",
    orderNumber: "123456",
    cashier: "Prince",
    tableNumber: 123456
};

// Generate HTML and log to console
const htmlContent = generateHtml(data);

return htmlContent
