// console.log("PING");

// Create an object that represents your pet.
const myPet = {
    // Name property with a string value.
    name: "Maggie",
    // Species property with a string value.
    species: "Cat",
    // Nicknames property with an array value. Array contains strings.
    nicknames: ["Maggie-Moo", "Mags-Pie", "Kitten Pants", "Chick-Pie"],
    // Age property with an integer value
    age: 8,
    // Pick three behaviors that your pet has and add three keys to your pet object. 
    hiss: function(){
        window.alert("**CAT HISSING**");
    },
    meow: function(){
        window.alert("MOWWWWWWWWWWWW");
    },
    sleep: function(){
        window.alert("zzzzzZZZZZZZZZZ");
    }
}

console.log(myPet);

//Once you have define the properties, invoke each behavior.
myPet.hiss();
myPet.meow();
myPet.sleep();
