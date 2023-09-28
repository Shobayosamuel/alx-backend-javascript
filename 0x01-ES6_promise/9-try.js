export default function guardrail(mathFunction) {
    const arr = [];
    try {
        const value = mathFunction();
        arr.push(value);
    } catch (error) {
        arr.push(error.message);
    } finally {
        arr.push('Guardrail was processed');
    }
    return arr;
}