// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_name, _EyeColor, _ShirtType, _Bling) {
    const NFT = {
    "name": _name,
    "EyeColor": _EyeColor,
    "ShirtType" : _ShirtType,
    "Bling" : _Bling
    }
    NFTs.push(NFT);
    console.log("Minted: "+ _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i=0;i<NFTs.length;i++){
        console.log(NFTs[i])
        console.log("\nID : \t\t"+(i+1));
        console.log("Name: \t\t"+ NFTs[i].name);
        console.log("EyeColor: \t"+ NFTs[i].EyeColor);
        console.log("ShirtType: "+ NFTs[i].ShirtType);
        console.log("Bling: \t\t"+ NFTs[i].Bling);

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Khushi","Black","Checked","Silver Watch");
mintNFT("Khuc","blue","Plain","Golden Watch");
listNFTs();
getTotalSupply();
