function makeDoctor (name, specialty, address){
    return{
        docName: name,
        docSpecialty: specialty,
        docAddress: address
    }
}

function makePet (name, breed){
    return{
        petName: name,
        petBreed: breed
    }
}

const BowWowKennels = [
    {petName: "Mia", petBreed: "Shitzu"},
    {petName: "Milli", petBreed: "Maltipoo"}
]