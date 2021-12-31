var date = new Date();
var day = date.getDate();
var month = date.getMonth() ;
var years = date.getFullYear();
var currentMonth = date.toLocaleString('default', { month: 'short' });
var bday;
var result;
var age;
var y;
var m;
var d;
var y1;
var m1;
var d1;


month = month+1;
console.log(years);
[".day", ".month", ".year"].forEach(element => {
    document.querySelector(element).addEventListener("keyup", function (e) {
       
        bday = e.target.value;
        y = document.querySelector(".year").value;
        m = document.querySelector(".month").value;
        d = document.querySelector(".day").value;
    
        if (month >= m) {
            y1 = years - y;
            m1 = month - m;
            
        }
        else if (month < m) {
            y1 = years - y - 1;
            m1 = 12 - (month - m);
            

        }
        if(day>=d){
            d1 = day-d;
        }
            else if(day<d){
                if (currentMonth === "Jan" || currentMonth === "Mar" || currentMonth === "May" || currentMonth === "Jul" || currentMonth === "Aug" || currentMonth === "Oct" || currentMonth === "Dec") {
                    d1 = 31 - (d -day);
                }
                else if (currentMonth === "Apr" || currentMont === "Jun" || currentMonth === "Sep" || currentMonth === "Nov") {
                    d1 = 30 - (d - day);
                }
                else {
        
                    if (years % 4 === 0) {
                        d1 = 29 - (d - day);
                    }
                    else {
                        d1 = 28 - (d - day);
                    }
                }
            }
        


        document.querySelector(".Submit").addEventListener("click", function () {
            if(d<=31&&m<=12&&y<=years)
            document.querySelector("p").innerText = "You are " + y1 + " Years, " + m1 + " Months, " + d1 + " days old !";
          
            else {
                
                document.querySelector("p").innerText="Invalid input ! Enter correct D.O.B "
                
            }
        });

    });
})

function toggleColor() {

    document.querySelector("p").classList.toggle("p");
    setTimeout(function () {
        toggleColor();
    }, 1000);
}

toggleColor();
