function Check_date()
{
    let Date = document.getElementById("date");
    let date = Date.value;
    let regex = /^(20[0-2][0-5]|19[0-9][0-9])\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|30)$/;
    if (regex.test(date))
    {
        document.getElementById("date_Check").style.color = "green";
        document.getElementById("date_Check").innerHTML = "input correct";
        Date.style.backgroundColor = "lightgreen"; //при правильном вводе данных цвет поля меняется на зеленый
        return true;
    }
    else
    {
        document.getElementById("date_Check").style.color = "red";
        document.getElementById("date_Check").innerHTML = "Please, enter date in 'YYYY.MM.DD' format";
        Date.style.backgroundColor = "lightcoral"; // при неправильном вводе данных цвет поля меняется на карсный
        return false;
    }
}
function Check_time()
{
    let Time = document.getElementById("time");
    let time = Time.value;
    let regex = /^(2[0-4]|[01]?[0-9])\.(5[0-9]|[0-4]?[0-9])$/;
    if (regex.test(time))
    {
        document.getElementById("time_Check").style.color = "green";
        document.getElementById("time_Check").innerHTML = "input correct";
        Time.style.backgroundColor = "lightgreen";
        return true;
    }
    else
    {
        document.getElementById("time_Check").style.color = "red";
        document.getElementById("time_Check").innerHTML = "Please, enter time in 'HH.MM' format";
        Time.style.backgroundColor = "lightcoral";
        return false;
    }
}
function Check_address()
{
    let Address = document.getElementById("address");
    let address = Address.value;
    let regex = /^[а-яА-Я\s]{2,53},\d{1,4}$/;;
    if (regex.test(address))
    {
        document.getElementById("address_Check").style.color = "green";
        document.getElementById("address_Check").innerHTML = "input correct";
        Address.style.backgroundColor = "lightgreen";
        return true;
    }
    else
    {
        document.getElementById("address_Check").style.color = "red";
        document.getElementById("address_Check").innerHTML = "Please, enter address in 'NaNaNaNa,NuNu' format";
        Address.style.backgroundColor = "lightcoral";
        return false;
    }
}
function Check_city()
{
    let City = document.getElementById("city");
    let city = City.value;
    let regex = /^[а-яА-я\s]{2,15}$/;
    if (regex.test(city))
    {
        document.getElementById("city_Check").style.color = "green";
        document.getElementById("city_Check").innerHTML = "input correct";
        City.style.backgroundColor = "lightgreen";
        return true;
    }
    else
    {
        document.getElementById("city_Check").style.color = "red";
        document.getElementById("city_Check").innerHTML = "Please, enter 2-15 characters";
        City.style.backgroundColor = "lightcoral";
        return false;
    }
}
function Summary_check()
{
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let Button = document.getElementById("button");
    if (date != "" && time != "" &&  address != "" && city != "")
    {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML += "<p>Your order was succesfully placed. You may see the ditales of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p> Date: " + date + ".</br>";
        document.getElementById("summary").innerHTML += "<p> Time: " + time + ".</br>";
        document.getElementById("summary").innerHTML += "<p> Address: " + address + ".</br>";
        document.getElementById("summary").innerHTML += "<p> City: " + city + ".</br>";
        Button.style.display = "none"; //при удачной отправке формы кнопка исчезает
    }
    else
    {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}

