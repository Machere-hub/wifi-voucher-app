document.getElementById("duration-display").textContent = duration;
  document.getElementById("expiration-display").textContent = expirationString;

  // Generate QR code
  const qrData = `WIFI:T:WPA;S:${ssid};P:${voucherCode};;`;
  QRCode.toCanvas(document.getElementById("qrcode"), qrData, function(error) {
    if (error) console.error(error);
    console.log("QR Code generated!");
  });

  // Show the voucher info
  document.getElementById("voucher-info").classList.remove("hidden");
});
