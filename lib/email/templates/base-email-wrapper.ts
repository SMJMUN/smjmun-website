export function getBaseEmailWrapper(content: string, previewText: string = "Update from SMJMUN"): string {
  const logoUrl = "https://smjmun.com/images/SMJMUNLOGOFILE.png";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <title>SMJMUN</title>
      <style>
        body, table, td, p, a, h1, h2, h3, h4, h5, h6 {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        body {
          background-color: #f7f9fa;
          color: #333333;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .header {
          background-color: #0A1628;
          padding: 30px 20px;
          text-align: center;
        }
        .header img {
          width: 80px;
          height: auto;
          border-radius: 50%;
        }
        .content {
          padding: 40px 30px;
          line-height: 1.6;
        }
        .footer {
          background-color: #f1f5f9;
          padding: 20px 30px;
          text-align: center;
          font-size: 13px;
          color: #64748b;
        }
        .footer a {
          color: #A97C50;
          text-decoration: none;
        }
        .button {
          display: inline-block;
          background-color: #A97C50;
          color: #ffffff !important;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .divider {
          border-top: 1px solid #e2e8f0;
          margin: 30px 0;
        }
      </style>
    </head>
    <body>
      <div style="display: none; max-height: 0px; overflow: hidden;">
        ${previewText}
      </div>
      
      <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f7f9fa;">
        <tr>
          <td align="center">
            <div class="email-container">
              <!-- Header -->
              <div class="header">
                <img src="${logoUrl}" alt="SMJMUN Logo">
              </div>

              <!-- Main Content -->
              <div class="content">
                ${content}
              </div>

              <!-- Footer -->
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Shri Seth Mangilalji Sahu International Model United Nations.</p>
                <p>Empowering the next generation of global leaders.</p>
                <br>
                <p>
                  <a href="https://smjmun.com">smjmun.com</a> | 
                  <a href="mailto:info@smjmun.com">info@smjmun.com</a>
                </p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
