edwin# UFARM-PROJECT
  


  <!-- registered -->
  doctype html
head
  meta(charset='UTF-8')
  meta(http-equiv='X-UA-Compatible' content='IE=edge')
  link(rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous')
  meta(name='viewport' content='width=device-width, initial-scale=1.0')
  title Document
.container
  fieldset
    // Form Name
    legend
      center
        h2
          b Farmer Ones Registered
    br
      
    .container

      h3    
        //- | Total fess paid: #{total.totalFees}
      fieldset 
        h5  
          | List of Urban Farmers in Ward #{farmerWard}
          br
          br
          | Number of Urban Farmers in ward #{farmerWard}: #{activeFarmers}
          br
        table.table
            thead.thead-dark
                tr
                    th(scope='col') Name
                    //- th(scope='col') Lastname
                    th(scope='col') Unique ID
                    th(scope='col') Dob
                    th(scope='col') Gender
                    th(scope='col') Email
                    th(scope='col') Phone number
                    th(scope='col') Address
                    th(scope='col') Ward
                    th(scope='col') Action
                    th(scope='col') Action
            tbody
            if urbanFarmers.length 
                each urbanFarmer in urbanFarmers
                    tr
                        td #{urbanFarmer.firstName} #{urbanFarmer.secondName}
                        td #{urbanFarmer.email}
                        td #{urbanFarmer.role}
                        td #{urbanFarmer.password}
                        td #{urbanFarmer.gender}
                        td #{urbanFarmer.DOR}
                        td #{urbanFarmer.dobirth}
                        td #{urbanFarmer.ninNumber}
                        td 
                        //-     form(method='post', action='/students/delete')
                        //-         input(type='hidden', name="id", value=student._id)
                        //-         button.btn.btn-danger(type='submit') Delete

                        //- td        
                        //-     a.btn.btn-dark.btn-block(href='/edit_student/'+student._id) Edit
            else 
                p 
                  h4 There are no Urban Farmers registered yet


    

script(src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossorigin='anonymous')
script(src='https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js' integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q' crossorigin='anonymous')
script(src='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js' integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl' crossorigin='anonymous')
