const runApp  = (e) =>{
    e.preventDefault();
    const input = document.getElementById("letter");
    const letter = input.value.toLowerCase();
    const title = document.getElementById("title");
    const picture = document.getElementById('picture');

    if(letter == "a")
        {
            title.innerHTML = "Apple"
            picture.src = "apple.jfif"
        }
    else if(letter == "b")
        {
            title.innerHTML = "Ball"
            picture.src = "b.png"
        }
    else if(letter == "c")
        {
            title.innerHTML = "Cat"
            picture.src = "c.jpg"
        }
    else if(letter == "d")
        {
            title.innerHTML = "Dog"
            picture.src = "d.png"
        }
    else if(letter == "e")
        {
            title.innerHTML = "Elephant"
            picture.src = "e.jfif"
        }
    else if(letter == "f")
        {
            title.innerHTML = "Fish"
            picture.src = "f.jpg"
        }
    else if(letter == "g")
        {
            title.innerHTML = "Goat"
            picture.src = "g.jfif"
        }
    else if(letter == "h")
        {
            title.innerHTML = "Hen"
            picture.src = "h.jfif"
        }
    else if(letter == "i")
        {
            title.innerHTML = "Icecream"
            picture.src = "i.png"
        }
     else if(letter == "j")
        {
            title.innerHTML = "Joker"
            picture.src = "j.png"
        }
     else if(letter == "k")
        {
            title.innerHTML = "Kite"
            picture.src = "k.png"
        }
     else if(letter == "l")
        {
            title.innerHTML = "Lion"
            picture.src = "l.jfif"
        }
    else if(letter == "m")
        {
            title.innerHTML = "Monkey"
            picture.src = "m.jfif"
        }
    else if(letter == "n")
        {
            title.innerHTML = "Nest"
            picture.src = "n.jpg"
        }
    else if(letter == "o")
        {
            title.innerHTML = "Orange"
            picture.src = "o.jpg"
        }
    else if(letter == "p")
        {
            title.innerHTML = "Parrate"
            picture.src = "p.jpg"
        }
    else if(letter == "q")
        {
            title.innerHTML = "Qeen"
            picture.src = "q.jfif"
        }
    else if(letter == "r")
        {
            title.innerHTML = "Rose"
            picture.src = "r.jfif"
        }
    else if(letter == "s")
        {
            title.innerHTML = "Sun"
            picture.src = "s.jfif"
        }
    else if(letter == "t")
        {
            title.innerHTML = "Tiger"
            picture.src = "t.png"
        }
    else if(letter == "u")
        {
            title.innerHTML = "Umbrella"
            picture.src = "u.png"
        }
    else if(letter == "v")
        {
            title.innerHTML = "van"
            picture.src = "v.jfif"
        }
    else if(letter == "w")
        {
            title.innerHTML = "water"
            picture.src = "w.jfif"
        }
    else if(letter == "x")
        {
            title.innerHTML = "Xmas"
            picture.src = "x.jfif"
        }
    else if(letter == "y")
        {
            title.innerHTML = "Yax"
            picture.src = "y.jfif"
        }
    else if(letter == "z")
        {
            title.innerHTML = "Zebra"
            picture.src = "v.jfif"
        }
        else{
            title.innerHTML = "Option Not Found"
            picture.src = "noimages.jfif"
        }
    
}