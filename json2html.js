<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON to HTML Table</title>
</head>
<body>
    <script type="module">
        import json2html from "https://jagruth9899.github.io/Straive-exam/json2html.js";

        const data = [
            { Name: "Alice", Age: 25 },
            { Name: "Bob", Age: 30 },
            { Name: "Charlie", Age: 35, Gender: "M" }
        ];

        document.body.innerHTML = json2html(data);
    </script>
</body>
</html>
