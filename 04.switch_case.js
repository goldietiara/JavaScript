
function etika_makan(menggunakan){
    
    if (typeof menggunakan !== typeof "string") {
        return "input must be string"
    } else {
        
        menggunakan = menggunakan.toLowerCase()

        switch (menggunakan){
            case "sendok":
            return`boleh makan pakai ${menggunakan}`
        break;
        case "sumpit":
            return`boleh makan pakai ${menggunakan}`
        break;
        case "tangan":
            return`boleh makan pakai ${menggunakan}`
        break;
        default:
            return`TIDAK BOLEH MAKAN PAKAI ${menggunakan.toUpperCase()}!!!`
        break;
        }
    }
}

console.log(etika_makan("KAKI"))
console.log(etika_makan("SUMPIT"))
console.log(etika_makan(879))

