const { createClient } = supabase
supabase = createClient("SUPABASE-LINK", "SUPABASE-ANON-KEY")
      
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

          const { error } = await supabase.from('USERNAME').insert([submision], { returning: 'minimal'})

          if (error) {
              alert('type something bruv')
          } else {
              window.location.replace("success.html")
          }

          formInputs.forEach(element => element.value = '')

      })