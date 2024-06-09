const toggleButton = document.querySelector('.toggle-button');
        const navLinks = document.querySelector('.nav-links');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        

           document.getElementById('login').addEventListener('click',function(){
            Swal.fire(
                'This Feature is Not added yet',
                'It will be added soon',
                'warning'
              )
           })

           var btn = document.getElementById('btn')
            
            var targetElement = document.getElementById('template');

         function scroller(){
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            });
        }
       