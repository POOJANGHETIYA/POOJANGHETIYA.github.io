<html>


<head>
     <link rel="icon" href="C:\Users\gheti\OneDrive\Desktop\workplace\WEBSITES\LandingPage\Images\About">
     <title>ITW Assignment</title>
     <link rel="stylesheet" href="port.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
</head>

<body>
     <div class="container">
          <header class="flex">
               <nav>
                    <ul class="flex">
                         <li><a href="#about"><b> About</b></a></li>
                         <li><a href="#projects"><b> Projects</b></a></li>
                         <li><a href="#contact"><b> Contact Me</b></a></li>
                    </ul>
               </nav>
          </header>

          <div class="main flex">
               <div class="main_1">
                    <h2>Hello! I am </h2>
                    <span class="auto">POOJAN GHETIYA</span>
               </div>
               <div class="main_2">
                    <img src="./Images/4.png">
               </div>
          </div>

          <!--  -->
          <div class="projects" id="projects">
               <h1>MY PROJECTS</h1>
               <p> Lorem ipsum dolor sicing elit. Molestias officiis veniam reprehenderit
                    minima praesentium provident eos aperiam excepturi doloribus impedit.
               </p>
               <a href="https://www.google.com"><button class="button">GITHUB</button></a>
               <div class="projects-div flex div-1">
                    <img src="./Images/Projects/5.png"><br>
                    <h3>Project 1</h3>
                    <p>
                         Information about Project 1 will be displayed here...
                    </p>
                    <button>View Code</button>
               </div>
               <div class="projects-div flex div-2">
                    <img src="./Images/Projects/6.png">
                    <h3>Project 2</h3>
                    <p>Information about Project 2 will be displayed here...</p>
                    <button>View Code</button>
               </div>
               <div class="projects-div flex div-3">
                    <img src="./Images/Projects/7.png">
                    <h3>Project 3</h3>
                    <p>Information about Project 3 will be displayed here...</p>
                    <button>View Code</button>
               </div>
               <div class="projects-div flex div-4">
                    <img src="./Images/Projects/9.png">
                    <h3>Project 4</h3>
                    <p>Information about Project 4 will be displayed here...</p>
                    <button>View Code</button>
               </div>
          </div>
          <br><br>
          <div class="languages " id="languages">
               <h3> PROGRAMMING FIELDS</h3>
               <ul class="listOfLang">
                    <li>C</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>WEB DEVELOPMENT</li>
                    <li>SQL</li>
                    <li>MACHINE LEARNING</li>
               </ul>
          </div>
          <!--  -->
          <div class="about flex" id="about">
               <div class="about_1">
                    <h1>About Me</h1>
                    <span>Poojan Ghetiya</span>
                    <p>
                         A passionate programmer and tech enthusiast. Bringing forth a motivated attitude and a variety of powerful skills. 
                         I have a strong interest in Cloud Engineering and ML and want to improvise and enhance my passion towards it.
                    </p>
                    <div class="btns">
                         <a href="PG_Resume.pdf" target="_blank"> <button >My CV</button></a>
                         <a href="tel:8530088085" target="_blank"><button>Contact Me</button></a>
                    </div>
               </div>
               <div class="about_2">
                    <img src="./Images/About/1.png">
               </div>
          </div>
          <br><br><br>


          <footer class="flex" id="contact">
               <div class="media">
                    <div class="copy">©POOJAN_GHETIYA</div>
                    <div class="social">
                         <a href="https://www.linkedin.com/in/poojanghetiya2712/" target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
                         <a href="www.facebook.com" target="_blank"> <i class="fa-brands fa-facebook"></i></a>
                         <a href="https://api.whatsapp.com/send?phone=918530088085&text=hi" target="_blank"> <i class="fa-brands fa-whatsapp"></i></a>
                         <a href="https://www.hackerrank.com/ghetiyapoojan" target="_blank"> <i class="fa-brands fa-hackerrank"></i></a>
                    </div>

               </div>
          </footer>
     </div>
     <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
     <script>
          var typed = new Typed(".auto", {

               strings: ["POOJAN GHETIYA", "Software Geek", "Backend Dev", "Cloud Engineer", "ML Enthusiast"],
               backSpeed: 70,
               typeSpeed: 60,
               loop: true,
          });
     </script>
     
</body>

</html>