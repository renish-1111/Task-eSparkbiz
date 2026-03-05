let s = "pohop"

function is_palindrom(s) {
    l = 0
    r = s.length - 1
    while (l < r) {
        if (s[l] != s[r]) {
            return false
        }
        l++
        r--
    }
    return true
}
console.log(is_palindrom(s));
