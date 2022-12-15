const { createClient } = supabase
supabase = createClient("https://xjpjzawuijmdqxynxxfg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcGp6YXd1aWptZHF4eW54eGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwMDkxNjAsImV4cCI6MTk4NjU4NTE2MH0.gwIAq1IKjApb5vNAJbeA5pw_y4llKT-iJrGuR8Rfa5M")
      
const form = document.querySelector('#im-gonna-lie-response')
form.addEventListener('submit', async (event) => {
          event.preventDefault()

         const formInputs = form.querySelectorAll('input')

          let submision = {}

          formInputs.forEach(element => {
            const { value, name } = element
            if (value) {
                submision[name] = value
            }
          })

          const { error } = await supabase.from('fingerpointer96').insert([submision], { returning: 'minimal'})

          if (error) {
              alert('type something bruv')
          } else {
              window.location.replace("success.html")
          }

          formInputs.forEach(element => element.value = '')

      })