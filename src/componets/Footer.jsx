import React from 'react'



const Footer = () => {
  return (
    <div class="container-fluid text-white mt-5 " style={{backgroundColor:'black'}}>
    <div class="row">
    <div class="col-lg-4 col-sm-12  d-grid justify-content-center text-center pt-4  border-end">
       <div>
        <p  style={{color:'red',fontWeight:'600',fontFamily:'ui-sans-serif',fontSize:'18px'}}>CONNECT WITH US</p>
        <p>Email: nmart@gmail.com</p>
        <p>Phone: +91 9247577555</p>
        <div> <p>Address:</p>
        <span>Near Bus Stand,</span>
        <span>Tarvanipeta,</span>
        <span>Mandapeta</span>
        </div>
       </div>
       <div class="mt-3" id="icons">
        <img class="ms-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS44NTYgNi44NGEuNzUuNzUgMCAwIDAtMS4xMDYuNjZWMTdhLjc1Ljc1IDAgMCAwIDEuNSAwVjguNzU2bDUuMzk0IDIuOTA0Yy4yMjIuMTIuNDkuMTIuNzEyIDBsNS4zOTQtMi45MDRWMTdhLjc1Ljc1IDAgMCAwIDEuNSAwVjcuNWEuNzUuNzUgMCAwIDAtMS4xMDYtLjY2TDEyIDEwLjE0OHoiLz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4zMSAzLjcyMmE1OS42IDU5LjYgMCAwIDAtMTAuNjIgMGwtMS41MTguMTM1YTMuNTMgMy41MyAwIDAgMC0zLjE3OSAzLjAwNmEzNS41IDM1LjUgMCAwIDAgMCAxMC4yNzRhMy41MyAzLjUzIDAgMCAwIDMuMTggMy4wMDVsMS41MTYuMTM2YzMuNTM0LjMxNiA3LjA4OC4zMTYgMTAuNjIyIDBsMS41MTctLjEzNmEzLjUzIDMuNTMgMCAwIDAgMy4xNzktMy4wMDVhMzUuNSAzNS41IDAgMCAwIDAtMTAuMjc0YTMuNTMgMy41MyAwIDAgMC0zLjE4LTMuMDA2ek02LjgyNCA1LjIxNmE1OCA1OCAwIDAgMSAxMC4zNTQgMGwxLjUxNy4xMzZhMi4wMyAyLjAzIDAgMCAxIDEuODI5IDEuNzI4YTM0IDM0IDAgMCAxIDAgOS44NGEyLjAzIDIuMDMgMCAwIDEtMS44MjkgMS43MjhsLTEuNTE3LjEzNmMtMy40NDQuMzA4LTYuOTEuMzA4LTEwLjM1NCAwbC0xLjUxNy0uMTM2YTIuMDMgMi4wMyAwIDAgMS0xLjgyOS0xLjcyOGEzNCAzNCAwIDAgMSAwLTkuODRhMi4wMyAyLjAzIDAgMCAxIDEuODI5LTEuNzI4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt=""/>
        <img class="mx-2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjIgMTJjMC01LjUyLTQuNDgtMTAtMTAtMTBTMiA2LjQ4IDIgMTJjMCA0Ljg0IDMuNDQgOC44NyA4IDkuOFYxNUg4di0zaDJWOS41QzEwIDcuNTcgMTEuNTcgNiAxMy41IDZIMTZ2M2gtMmMtLjU1IDAtMSAuNDUtMSAxdjJoM3YzaC0zdjYuOTVjNS4wNS0uNSA5LTQuNzYgOS05Ljk1Ii8+PC9zdmc+" alt=""/>
        <img class="mx-2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjIuNDYgNmMtLjc3LjM1LTEuNi41OC0yLjQ2LjY5Yy44OC0uNTMgMS41Ni0xLjM3IDEuODgtMi4zOGMtLjgzLjUtMS43NS44NS0yLjcyIDEuMDVDMTguMzcgNC41IDE3LjI2IDQgMTYgNGMtMi4zNSAwLTQuMjcgMS45Mi00LjI3IDQuMjljMCAuMzQuMDQuNjcuMTEuOThDOC4yOCA5LjA5IDUuMTEgNy4zOCAzIDQuNzljLS4zNy42My0uNTggMS4zNy0uNTggMi4xNWMwIDEuNDkuNzUgMi44MSAxLjkxIDMuNTZjLS43MSAwLTEuMzctLjItMS45NS0uNXYuMDNjMCAyLjA4IDEuNDggMy44MiAzLjQ0IDQuMjFhNC4yIDQuMiAwIDAgMS0xLjkzLjA3YTQuMjggNC4yOCAwIDAgMCA0IDIuOThhOC41MiA4LjUyIDAgMCAxLTUuMzMgMS44NHEtLjUxIDAtMS4wMi0uMDZDMy40NCAyMC4yOSA1LjcgMjEgOC4xMiAyMUMxNiAyMSAyMC4zMyAxNC40NiAyMC4zMyA4Ljc5YzAtLjE5IDAtLjM3LS4wMS0uNTZjLjg0LS42IDEuNTYtMS4zNiAyLjE0LTIuMjMiLz48L3N2Zz4=" alt=""/>
        <img class="mx-2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy44IDJoOC40QzE5LjQgMiAyMiA0LjYgMjIgNy44djguNGE1LjggNS44IDAgMCAxLTUuOCA1LjhINy44QzQuNiAyMiAyIDE5LjQgMiAxNi4yVjcuOEE1LjggNS44IDAgMCAxIDcuOCAybS0uMiAyQTMuNiAzLjYgMCAwIDAgNCA3LjZ2OC44QzQgMTguMzkgNS42MSAyMCA3LjYgMjBoOC44YTMuNiAzLjYgMCAwIDAgMy42LTMuNlY3LjZDMjAgNS42MSAxOC4zOSA0IDE2LjQgNHptOS42NSAxLjVhMS4yNSAxLjI1IDAgMCAxIDEuMjUgMS4yNUExLjI1IDEuMjUgMCAwIDEgMTcuMjUgOEExLjI1IDEuMjUgMCAwIDEgMTYgNi43NWExLjI1IDEuMjUgMCAwIDEgMS4yNS0xLjI1TTEyIDdhNSA1IDAgMCAxIDUgNWE1IDUgMCAwIDEtNSA1YTUgNSAwIDAgMS01LTVhNSA1IDAgMCAxIDUtNW0wIDJhMyAzIDAgMCAwLTMgM2EzIDMgMCAwIDAgMyAzYTMgMyAwIDAgMCAzLTNhMyAzIDAgMCAwLTMtMyIvPjwvc3ZnPg==" alt=""/>
        <img class="mx-2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMDUgNC45MUE5LjgyIDkuODIgMCAwIDAgMTIuMDQgMmMtNS40NiAwLTkuOTEgNC40NS05LjkxIDkuOTFjMCAxLjc1LjQ2IDMuNDUgMS4zMiA0Ljk1TDIuMDUgMjJsNS4yNS0xLjM4YzEuNDUuNzkgMy4wOCAxLjIxIDQuNzQgMS4yMWM1LjQ2IDAgOS45MS00LjQ1IDkuOTEtOS45MWMwLTIuNjUtMS4wMy01LjE0LTIuOS03LjAxbS03LjAxIDE1LjI0Yy0xLjQ4IDAtMi45My0uNC00LjItMS4xNWwtLjMtLjE4bC0zLjEyLjgybC44My0zLjA0bC0uMi0uMzFhOC4yNiA4LjI2IDAgMCAxLTEuMjYtNC4zOGMwLTQuNTQgMy43LTguMjQgOC4yNC04LjI0YzIuMiAwIDQuMjcuODYgNS44MiAyLjQyYTguMTggOC4xOCAwIDAgMSAyLjQxIDUuODNjLjAyIDQuNTQtMy42OCA4LjIzLTguMjIgOC4yM200LjUyLTYuMTZjLS4yNS0uMTItMS40Ny0uNzItMS42OS0uODFjLS4yMy0uMDgtLjM5LS4xMi0uNTYuMTJjLS4xNy4yNS0uNjQuODEtLjc4Ljk3Yy0uMTQuMTctLjI5LjE5LS41NC4wNmMtLjI1LS4xMi0xLjA1LS4zOS0xLjk5LTEuMjNjLS43NC0uNjYtMS4yMy0xLjQ3LTEuMzgtMS43MmMtLjE0LS4yNS0uMDItLjM4LjExLS41MWMuMTEtLjExLjI1LS4yOS4zNy0uNDNzLjE3LS4yNS4yNS0uNDFjLjA4LS4xNy4wNC0uMzEtLjAyLS40M3MtLjU2LTEuMzQtLjc2LTEuODRjLS4yLS40OC0uNDEtLjQyLS41Ni0uNDNoLS40OGMtLjE3IDAtLjQzLjA2LS42Ni4zMWMtLjIyLjI1LS44Ni44NS0uODYgMi4wN3MuODkgMi40IDEuMDEgMi41NmMuMTIuMTcgMS43NSAyLjY3IDQuMjMgMy43NGMuNTkuMjYgMS4wNS40MSAxLjQxLjUyYy41OS4xOSAxLjEzLjE2IDEuNTYuMWMuNDgtLjA3IDEuNDctLjYgMS42Ny0xLjE4Yy4yMS0uNTguMjEtMS4wNy4xNC0xLjE4cy0uMjItLjE2LS40Ny0uMjgiLz48L3N2Zz4=" alt=""/>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTAgMTVsNS4xOS0zTDEwIDl6bTExLjU2LTcuODNjLjEzLjQ3LjIyIDEuMS4yOCAxLjljLjA3LjguMSAxLjQ5LjEgMi4wOUwyMiAxMmMwIDIuMTktLjE2IDMuOC0uNDQgNC44M2MtLjI1LjktLjgzIDEuNDgtMS43MyAxLjczYy0uNDcuMTMtMS4zMy4yMi0yLjY1LjI4Yy0xLjMuMDctMi40OS4xLTMuNTkuMUwxMiAxOWMtNC4xOSAwLTYuOC0uMTYtNy44My0uNDRjLS45LS4yNS0xLjQ4LS44My0xLjczLTEuNzNjLS4xMy0uNDctLjIyLTEuMS0uMjgtMS45Yy0uMDctLjgtLjEtMS40OS0uMS0yLjA5TDIgMTJjMC0yLjE5LjE2LTMuOC40NC00LjgzYy4yNS0uOS44My0xLjQ4IDEuNzMtMS43M2MuNDctLjEzIDEuMzMtLjIyIDIuNjUtLjI4YzEuMy0uMDcgMi40OS0uMSAzLjU5LS4xTDEyIDVjNC4xOSAwIDYuOC4xNiA3LjgzLjQ0Yy45LjI1IDEuNDguODMgMS43MyAxLjczIi8+PC9zdmc+" alt=""/>
      </div>
    </div>
    <div class="col-lg-2 col-sm-12  col-md-6 d-grid justify-content-center   text-center pt-4 ">
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p style={{color:'red',fontWeight:'600',fontFamily:'ui-sans-serif',fontSize:'18px'}}>ABOUT CROMA</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"> <p >Help And Support</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>FAQs</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>Buying Guide</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"> <p>Return Policy</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>Store Locator</p></a>
    </div>
    <div class="col-lg-2 col-sm-12  col-md-6   d-grid justify-content-center text-center pt-4">
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p  style={{color:'red',fontWeight:'600',fontFamily:'ui-sans-serif',fontSize:'18px'}}>SITE MAP</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>Careers At Croma</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>Terms of Use</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>Disclaimer</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"> <p>Gift Card</p></a>
         <a class="text-decoration-none text-white" href="assets/pages/about us.html"><p>Privacy Policy</p></a>     
    </div>
    <div class="col-lg-2 col-sm-12  col-md-6 d-grid   justify-content-center text-center pt-4">
         <a class="text-decoration-none text-white" href="assets/pages/fashions.html"><p  style={{color:'red',fontWeight:'600',fontFamily:'ui-sans-serif',fontSize:'18px'}}>APPLIANCES</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/mobiles.html"><p>Phones & Wearables</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>Computers & Tablets</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/washing.html"><p>Kitchen Appliances</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>Audio & Video</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>Televisions & Accessories</p></a>     
    </div>
    <div class="col-lg-2  col-md-6 col-sm-12 d-grid justify-content-center text-center pt-4">
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p  style={{color:'red',fontWeight:'600',fontFamily:'ui-sans-serif',fontSize:'18px'}}>TOP BRANDS</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>Bosch</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>Samsung</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>LG</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>OGeneral</p></a>     
         <a class="text-decoration-none text-white" href="assets/pages/laptops.html"><p>One plus</p></a>     
    </div>
    </div>
      <div className="row">

    <div  class="col-lg-4  col-md-6 col-sm-12 d-grid justify-content-center text-center pt-4" style={{color:'red'}}>
        <h2>N Mart</h2>
        <p>Let's Click And Collect</p>
    </div>
    <div  class="col-lg-8 col-md-6 col-sm-6 d-flex justify-content-center pt-4 gap-2">
         <img src="../assets/l1.png" alt="" height='50px'/>
         <img src="../assets/l2.jfif" alt=""  height='50px'/>
         <img src="../assets/l3.png" alt="" height='50px' />
        
    </div>
  </div>

      <footer class="mt-5 bt-1 text-center  fs-6 border-top" style={{color:'red'}}>© Copyright 2026 N Mart. All rights reserved</footer>

</div>
  )
}

export default Footer
