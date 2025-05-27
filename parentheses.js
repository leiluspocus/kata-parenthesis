function isValid(str) {
    if ( typeof str !== 'string' ) {
        return false;
    }

    // Pile pour stocker les parenthèses ouvrantes
    const stack = [];
    
    // Map pour associer chaque parenthèse fermante à sa parenthèse ouvrante
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // On parcourt chaque élément de la chaîne
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // Si c'est une parenthèse ouvrante, l'ajouter à la pile
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // Si c'est une parenthèse fermante ...
        else if (char === ')' || char === '}' || char === ']') {
            const lastElementIndex = stack.length -1;
            
            // Si elle ne correspond pas, la chaîne n'est pas valide, inutile d'aller plus loin!
            if (stack[lastElementIndex] !== pairs[char]) {
                return false;
            }

            // On vérifie si la dernière parenthèse ouvrante vue correspond à la parenthèse fermante
            if ( stack[lastElementIndex] === pairs[char]) {
                stack.pop();
            }
        }
    }
    
    // La chaîne est valide si toutes les parenthèses ont été fermées
    return stack.length === 0;
}

export default isValid;
