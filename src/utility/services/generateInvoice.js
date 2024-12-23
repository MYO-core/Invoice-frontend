const generateHtml = (dd) => {
  const data = {
    orderDetails: {
      items: dd.items,
      tax: dd.tax,
      total: dd?.total,
    },
    storeData: dd?.store,
    customer_name: dd?.customer_name || '',
    customer_phone: dd?.customer_phone || '',
    orderNumber: dd?.orderNumber,
    cashier: dd?.user.name,
    tableNumber: dd?.tableNumber || '',
  };
  // Extract order details from data
  const orderDetails = data.orderDetails;
  const storeData = data.storeData;
  const gstNumber = dd?.organisation?.gst;
  let subtotal = 0;
  let itemsRows = '';
  let quantity = 0;
  orderDetails.items.forEach((item) => {
    const amount = item.quantity * item.price;
    subtotal += amount;
    quantity += item.quantity;
    itemsRows += `
            <tr class=" bill-details-new">
                <td>${item.item_name}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td>₹${amount.toFixed(2)}</td>
            </tr>
        `;
  });
  const phone = data.customer_phone ? `<div class="thora-khisakle">Phone: ${data.customer_phone}</div>` : '';
  const gstAmount = (subtotal * orderDetails.tax) / 100;
  const gstPercent = (orderDetails.tax / 2).toFixed(1);
  const grandTotal = subtotal + gstAmount;
  const sgst = gstAmount / 2;
  const getTime = () => {
    const currentDateTime = new Date();
    const date = currentDateTime.toLocaleDateString('en-US');
    const time = currentDateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${date} (${time})`;
  };

  return `
    
    <head>
    <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
                 hr {
        border: 1px solid black;
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
                width: 84mm;
                padding: 13px;
                background-color: #fff;
            }
            .bill-header,
            .bill-footer {
                text-align: center;
                font-size: 14px;
                color: #000;
                 margin-bottom: 10px;
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
                 .bill-details-new {
                font-size: 12px;
                color: #000;
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
                font-weight: bold;
                font-size: 14px;
            }
            .table-container td {
                font-size: 14px;
            }
                

            .table-container-new {
                width: 100%;
                border-collapse: collapse;
            }
            .table-container-new td, .table-container-new th {
                padding: 6px;
                margin-top:-4px;
                margin-bottom:-4px;
                text-align: center;
            }
            .table-container-new th {
                font-weight: bold;
                font-size: 14px;
            }
            .table-container-new td {
                font-size: 14px;
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
                <div class="gst thora-khisakle">GSTIN: ${gstNumber}</div>
            </div>

            <hr>

            <div class="bill-details">
                <div class="thora-khisakle">Name: ${data.customer_name}</div>
                ${data.customer_phone ? phone : ''}
            </div>
            <hr>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
                <tr class="bill-details">
                    <td>Date:</td>
                    <td class="bill-details">${getTime()}</td>
                    <td>Bill No:</td>
                    <td>${data.orderNumber}</td>
                </tr>
                <tr class="bill-details">
                    <td>Cashier:</td>
                    <td>${data.cashier}</td>
                    <td>Table No:</td>
                    <td>${data.tableNumber}</td>
                </tr>
            </table>

            <hr>
                 
           
            <table class="table-container-new" >
                        <thead class="bill-details-new "  >
                            <td style="font-weight:bold;">Item</td>
                            <td style="font-weight:bold;">Qty</td>
                            <td style="font-weight:bold;">Price</td>
                            <td style="font-weight:bold;">Amount</td>
                        </thead>
                        <tr style="border-top: 2px solid #000; margin-bottom:-4px;"></tr>
                        <tbody id="items-list">
                        ${itemsRows}
                    </tbody>
                        </table>
                      <hr style ="margin-top:5px;">
        
            <div class="total" >
            	<span style="margin-right:10px;">Total Qty: ${quantity} </span>
                Sub Total: ₹${subtotal.toFixed(2)}
            </div>
            <div class="total">
                sgst (${gstPercent}%): ₹${sgst.toFixed(2)}
            </div>
            <div class="total">
                cgst (${gstPercent}%): ₹${sgst.toFixed(2)}
            </div>
            <hr>
            <div class="total grand-total">
                Grand Total: ₹${grandTotal.toFixed(2)}
            </div>

            <hr>

            <div class="bill-footer">
                Thank You! Visit Again...
            </div>
        </div>
    </body>
    `;
};

const generateKot = (dd) => {
  const data = {
    orderDetails: {
      items: dd.items,
      tax: dd.tax,
      total: dd?.total,
    },
    storeData: dd?.store,
    customerName: dd?.customer_name || '',
    orderNumber: dd?.orderNumber,
    cashier: dd?.user.name,
    tableNumber: dd?.tableNumber || '',
  };
  // Extract order details from data
  const orderDetails = data.orderDetails;
  const storeData = data.storeData;
  const gstNumber = dd?.organisation?.gst;
  let subtotal = 0;
  let itemsRows = '';
  let quantity = 0;
  orderDetails.items.forEach((item) => {
    const amount = item.quantity * item.price;
    subtotal += amount;
    quantity += item.quantity;
    itemsRows += `
                <tr class="bill-details-new ">
                    <td>${item.item_name}</td>
                    <td>${item.quantity}</td>
                </tr>
            `;
  });

  const getTime = () => {
    const currentDateTime = new Date();
    const date = currentDateTime.toLocaleDateString('en-US');
    const time = currentDateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${date} (${time})`;
  };

  return `
        
        <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
                 hr {
        border: 1px solid black;
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
                padding: 10px;
                background-color: #fff;
            }
            .bill-header,
            .bill-footer {
                text-align: center;
                font-size: 14px;
                color: #000;
                 margin-bottom: 10px;
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
                 .bill-details-new {
                font-size: 12px;
                color: #000;
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
                font-weight: bold;
                font-size: 14px;
            }
            .table-container td {
                font-size: 14px;
            }
                

            .table-container-new {
                width: 100%;
                border-collapse: collapse;
            }
            .table-container-new td, .table-container-new th {
                padding: 6px;
                margin-top:-4px;
                margin-bottom:-4px;
                text-align: center;
            }
            .table-container-new th {
                font-weight: bold;
                font-size: 14px;
            }
            .table-container-new td {
                font-size: 14px;
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
    
                <div class="bill-details">
                   <strong> <div class="thora-khisakle ">Kitchen Order Ticket : ${data.orderNumber}</div></strong>
                </div>
                <hr>
    
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
                    <tr class="bill-details">
                        <td>Date:</td>
                        <td class="bill-details">${getTime()}</td>
                        <td>Bill No:</td>
                        <td>${data.orderNumber}</td>
                    </tr>
                    <tr class="bill-details">
                        <td>Cashier:</td>
                        <td>${data.cashier}</td>
                        <td>Table No:</td>
                        <td>${data.tableNumber}</td>
                    </tr>
                </table>
    
                <hr style="margin-bottom:-4px;" >
                     <table class="table-container-new" >
                        <thead class="bill-details-new "  >
                            <td style="font-weight:bold;">Item.</td>
                            <td style="font-weight:bold;">Qty.</td>
                        </thead>
                        <tr style="border-top: 2px solid #000; margin-bottom:-4px;"></tr>
                        <tbody id="items-list">
                        ${itemsRows}
                    </tbody>
                        </table>
                      <hr style ="margin-top:5px;">
            
                        <div class="bill-footer" style="margin:10px">
                       Thanks...
                        </div>
                        <hr>
                        
            </div>
        </body>
        `;
};
export { generateHtml, generateKot };
