let Increase_Button = document.getElementsByClassName("increase")
let Decrease_Button = document.getElementsByClassName("decrease")
let Current_cost = document.getElementById("current-order-cost")
let TicketDis1 = document.getElementById("tkt-dis1")
let TicketDis2 = document.getElementById("tkt-dis2")
let TicketDis3 = document.getElementById("tkt-dis3")
let TicketDis4 = document.getElementById("tkt-dis4")

let SLadultPrice = 1200
let SLchildPrice = 700
let FadultPrice = 5500
let FchildPrice = 2700
let Price = 0
let Current_Total = 0

for (let i = 0; i < Increase_Button.length; i++) {
    let button = Increase_Button[i]
    button.addEventListener("click", function (e) {
        let clickedbutton = e.target
        let input = clickedbutton.parentElement.children[1]
        let Ticket_count = parseInt(input.value) + 1
        input.value = Ticket_count
        /* */
        if (button == Increase_Button[0]) {
            Current_Total += SLadultPrice
            Current_cost.innerText = Current_Total
            TicketDis1.innerText = Ticket_count * SLadultPrice
        } else if (button == Increase_Button[1]) {
            Current_Total = parseInt(Current_Total) + SLchildPrice
            Current_cost.innerText = Current_Total
            TicketDis2.innerText = Ticket_count * SLchildPrice
        } else if (button == Increase_Button[2]) {
            Current_Total = parseInt(Current_Total) + FadultPrice
            Current_cost.innerText = Current_Total
            TicketDis3.innerText = Ticket_count * FadultPrice
        } else if (button == Increase_Button[3]) {
            Current_Total = parseInt(Current_Total) + FchildPrice
            Current_cost.innerText = Current_Total
            TicketDis4.innerText = Ticket_count * FchildPrice
        }
    })
}

for (let i = 0; i < Decrease_Button.length; i++) {
    let button = Decrease_Button[i]
    button.addEventListener("click", function (e) {
        let clickedbutton = e.target
        let input = clickedbutton.parentElement.children[1]
        let Ticket_count = parseInt(input.value) - 1
        /* */
        if (button == Decrease_Button[0] && Current_Total >= 0 && Ticket_count >= 0) {
            input.value = Ticket_count
            Current_Total = parseInt(Current_Total) - SLadultPrice
            Current_cost.innerText = Current_Total
            TicketDis1.innerText = Ticket_count * SLadultPrice
        } else if (button == Decrease_Button[1] && Current_Total >= 0 && Ticket_count >= 0) {
            input.value = Ticket_count
            Current_Total = parseInt(Current_Total) - SLchildPrice
            Current_cost.innerText = Current_Total
            TicketDis2.innerText = Ticket_count * SLchildPrice
        } else if (button == Decrease_Button[2] && Current_Total >= 0 && Ticket_count >= 0) {
            input.value = Ticket_count
            Current_Total = parseInt(Current_Total) - FadultPrice
            Current_cost.innerText = Current_Total
            TicketDis3.innerText = Ticket_count * FadultPrice
        } else if (button == Decrease_Button[3] && Current_Total >= 0 && Ticket_count >= 0) {
            input.value = Ticket_count
            Current_Total = parseInt(Current_Total) - FchildPrice
            Current_cost.innerText = Current_Total
            TicketDis4.innerText = Ticket_count * FchildPrice
        }
    })
}
/*Duration */

let Duration = document.getElementById("duration")

let One = document.getElementById("one")
let Two = document.getElementById("two")
let Three = document.getElementById("three")
let Four = document.getElementById("four")
let FinalCost = 0

function GetTotal(option) {
    if (option.value == "default") {
        Current_cost.innerText = (parseInt(TicketDis1.innerText) + parseInt(TicketDis2.innerText) +
            parseInt(TicketDis3.innerText) + parseInt(TicketDis4.innerText))
    } else if (option.value == "onee") {
        FinalCost = (parseInt(TicketDis1.innerText) + parseInt(TicketDis2.innerText) +
            parseInt(TicketDis3.innerText) + parseInt(TicketDis4.innerText)) + (One.value * 350) + (Two.value * 350) +
            (Three.value * 450) + (Four.value * 450)
        Current_cost.innerText = FinalCost
    } else if (option.value == "twoo") {
        FinalCost = (parseInt(TicketDis1.innerText) + parseInt(TicketDis2.innerText) +
            parseInt(TicketDis3.innerText) + parseInt(TicketDis4.innerText)) + (One.value * 600) + (Two.value * 600) +
            (Three.value * 800) + (Four.value * 800)
        Current_cost.innerText = FinalCost
    }
}

/*  add to order*/
let ShowTkt1 = document.getElementById("show-tk1")
let ShowTkt2 = document.getElementById("show-tk2")
let ShowTkt3 = document.getElementById("show-tk3")
let ShowTkt4 = document.getElementById("show-tk4")
let Add_To_Order = document.getElementById("add-to-order-btn")

const Overall_order_cost = document.getElementById("overall-order-cost")
Add_To_Order.onclick = function () {
    ShowTkt1.innerText = One.value;
    ShowTkt2.innerText = Two.value;
    ShowTkt3.innerText = Three.value;
    ShowTkt4.innerText = Four.value;
    Overall_order_cost.innerText = Current_cost.innerText

  

    TicketDis1.innerText = 0
    TicketDis2.innerText = 0
    TicketDis3.innerText = 0
    TicketDis4.innerText = 0
    Current_cost.innerText = 0

    One.value = 0
    Two.value = 0
    Three.value = 0
    Four.value = 0
}
/* add to fav */
function storeCost() {
    // const LocalA = {type:"Local Adult", No_Of_Tickets:One.value,}
    // let JSONLocalA = JSON.stringify(LocalA)
    // let LocalASet = localStorage.setItem(" Local Adult", JSONLocalA)
    let currentOrderStore = [
        { type: "Local Adult", No_Of_Tickets: One.value },
        { type: "Local Child", No_Of_Tickets: Two.value },
        { type: "Foreign Adult", No_Of_Tickets: Three.value },
        { type: "Foreign Child", No_Of_Tickets: Four.value },
        { Cost: "Total Cost", CostInRS: Current_cost.innerText }
    ]
    let JSONcurrentOrderStore = JSON.stringify(currentOrderStore)
    let SetCost = localStorage.setItem("Current Order", JSONcurrentOrderStore)
    //let newPerson = localStorage.getItem("Current Order")
    // let newPersonObj= JSON.parse(newPerson);
    // console.log(newPersonObj)

}
/* order fav */
function GetFavItems() {
    let FavOrder = localStorage.getItem("Current Order")
    let JSFavOrder = JSON.parse(FavOrder)
    console.log(JSFavOrder)
    ShowTkt1.innerText = (JSFavOrder[0].No_Of_Tickets)
    ShowTkt2.innerText = (JSFavOrder[1].No_Of_Tickets)
    ShowTkt3.innerText = (JSFavOrder[2].No_Of_Tickets)
    ShowTkt4.innerText = (JSFavOrder[3].No_Of_Tickets)
    Overall_order_cost.innerText = (JSFavOrder[4].CostInRS)
}

let user = localStorage.getItem("user")
let newUser = JSON.parse(user)
const usersName = newUser.name

/* popup */
let ThankuMsg_in_popup = document.getElementById("thankyou-name")
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("place-order");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    // loyalty point
    const Loyalty_Point_Dis = document.getElementById("loyalty-points")
    let Total_No_Tickets = parseInt(ShowTkt1.innerText) + parseInt(ShowTkt2.innerText) + parseInt( ShowTkt3.innerText) + parseInt(ShowTkt4.innerText)
    let remainingPoint = Total_No_Tickets - 3;
    console.log(Total_No_Tickets);
    if(remainingPoint > 3){
        remainingPoint = remainingPoint * 15
        Loyalty_Point_Dis.innerText = "Loyalty Points\n" + remainingPoint
    }else{
        Loyalty_Point_Dis.innerText = "Get more than THREE tickets to earn Loyalty Points"
    }
    ShowTkt1.innerText = 0
    ShowTkt2.innerText = 0
    ShowTkt3.innerText = 0
    ShowTkt4.innerText = 0
    Overall_order_cost.innerText = 0
    ThankuMsg_in_popup.innerText = usersName
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}

