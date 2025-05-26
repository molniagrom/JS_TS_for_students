const sentence = "I am Frontend developer";

export function splitIntoWords(sentence: string) {
    return sentence.toLowerCase().split(" ")
        .filter(word => word !== "" && word !== "-")
        .map(word =>
            word.replace("!", "")
                .replace(".", "")
                .replace(",", "")
        );
}

console.log(splitIntoWords(sentence));

export function sum(a: number, b: number): number {
    return a + b
}

export function mult(a: number, b: number): number {
    return a * b
}