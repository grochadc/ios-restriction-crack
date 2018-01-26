# iOS Restrictions Password Cracking

Brutefoce the iOS restrictions password using hash and salt.

##Usage
    node crack.js --hash [base64 hash] --salt [base64 salt] --interval 0-100

`interval` is a starting and ending point of the passwords to check separated by a dash.

If an interval is not given it will default to 0 and 100.

I would advice against checking every password at once (eg. 0-9999) because the program doesn't respond to a Ctrl-C interruption. It's probably best to try a series of intervals each time.
