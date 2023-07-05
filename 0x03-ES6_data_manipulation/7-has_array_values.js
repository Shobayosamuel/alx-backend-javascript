export default function hasValuesFromArray(set, arr) {
    for (const val in arr) {
        if (!set.has(arr[val])) {
            return false;
        }
    }
    return true
}
