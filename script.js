

window.onload =function (){
    let submit = document.getElementById('computeGPA')
    submit.addEventListener('click',computeGPA,false) 
     }
                  
                     let usergr = [],
                     userun = [],
                     gpa,
                     el;
                    function computeGPA(e){
                        e.preventDefault();
                        //defining grade and conversion to 1-5 system
                        let creditUnitsEarned = 0,
                         creditUnitsRegistered = 0,
                         unitError =  'Error- You have not enter any unit(s) values! GPA = N/A',
                        userError = 'Please Enter the Value of Units/Credits.'

            //retrieving user inputs
            usergr[0] = document.getElementById('gr1').value*1;
            usergr[1] = document.getElementById('gr2').value*1;
            usergr[2] = document.getElementById('gr3').value*1;
            usergr[3] = document.getElementById('gr4').value*1;
            usergr[4] = document.getElementById('gr5').value*1;
            usergr[5] = document.getElementById('gr6').value*1;
            usergr[6] = document.getElementById('gr7').value*1;
            usergr[7] = document.getElementById('gr8').value*1;
            usergr[8] = document.getElementById('gr9').value*1;
            usergr[9] = document.getElementById('gr10').value*1;
            usergr[10] = document.getElementById('gr11').value*1;
            usergr[11] = document.getElementById('gr12').value*1;
                       
         //this loop converts to grade between 0-39,40-44,45-49,50-59,etc
            for(var x = 0; x<usergr.length; x++){
          if (usergr[x]>=1&& usergr[x] <=40){usergr[x]= 0;}
         else if( usergr[x]>=40 && usergr[x]<=45){usergr[x]= 1;}
             else if( usergr[x]>=45 && usergr[x]<=49){usergr[x]= 2;}
          else if( usergr[x]>=50 && usergr[x]<=59){usergr[x]= 3;}
          else if( usergr[x]>=60 && usergr[x]<=69){usergr[x]= 4;}
          else if( usergr[x]>=70 && usergr[x] <=100){usergr[x]= 5;}
                
                
           else {
               break;
              console.log('Please Enter Correct Scores')
          return false
          }
         }
    
                //retrieving user units
            userun[0] = document.getElementById('un1').value*1;
            userun[1] = document.getElementById('un2').value*1;
            userun[2] = document.getElementById('un3').value*1;
             userun[3] = document.getElementById('un4').value*1;
             userun[4] = document.getElementById('un5').value*1;
            userun[5] = document.getElementById('un6').value*1;
            userun[6] = document.getElementById('un7').value*1;
            userun[7] = document.getElementById('un8').value*1;
            userun[8] = document.getElementById('un9').value*1;
            userun[9] = document.getElementById('un10').value*1;
            userun[10] = document.getElementById('un11').value*1;
            userun[11] = document.getElementById( 'un12').value*1;

            
             //multiplication 

            for(let j = 0; j<usergr.length; j++){creditUnitsEarned+= usergr[j]*userun[j];}
            
            //Getting total user unit
           creditUnitsRegistered+= userun.reduce((currentTotal,inputs) =>{
            return inputs + currentTotal;},0)
            // This if checks to  avoid dividing by zero error
            if(creditUnitsRegistered===0){
                alert(userError);
            return false;}
                
            //Calcualting the gpa
            gpa = (creditUnitsEarned/creditUnitsRegistered).toFixed(2);
                

                 el = document.getElementById('gpa');
                el.innerHTML = 'Your GPA is : ' +gpa                
            }
                        
            let resetBTN = document.getElementById('reset').addEventListener('click',resetApp)
            function resetApp(e){
             document.getElementById('gr1').value = '';
             document.getElementById('gr2').value = '';
             document.getElementById('gr3').value = '';
             document.getElementById('gr4').value = '';
             document.getElementById('gr5').value = '';
             document.getElementById('gr6').value = '';
             document.getElementById('gr7').value = '';
             document.getElementById('gr8').value = '';
             document.getElementById('gr9').value = '';
             document.getElementById('gr10').value = '';
             document.getElementById('gr11').value = '';
             document.getElementById('gr12').value = '';


                //resets units
              document.getElementById('un1').value = '';
              document.getElementById('un2').value= '';  
              document.getElementById('un3').value = '';
                document.getElementById('un4').value = '';
               document.getElementById('un5').value = '';
                 document.getElementById('un6').value  = '';
               document.getElementById('un7').value = '';
               document.getElementById('un8').value = '';
              document.getElementById('un9').value = '';
              document.getElementById('un10').value = '';
              document.getElementById('un11').value = '';
             document.getElementById( 'un12').value = '';
             document.getElementById('gpa').innerHTML= '';
             document.getElementById('score').innerHTML = '';
            }
