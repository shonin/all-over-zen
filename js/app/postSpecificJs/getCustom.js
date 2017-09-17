import resetButton from "./resetButton";

export default function(postNumber) {
    switch (Number(postNumber)) {
        case 4:
            return resetButton;
            break;
        default:
            return null;
    }
}
