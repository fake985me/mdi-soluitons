<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Vue Laravel SPA') }}</title>
    <meta name="theme-color" content="#6777ef" />
    <link rel="apple-touch-icon" href="{{ asset('img/icons/apple-touch-icon.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">

    @vite(['resources/js/app.js', 'resources/css/app.css'])
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">

</head>

<body class="font-sans antialiased">
    <div id="app" class="min-h-screen bg-gradient-to-r from-slate-400"></div>
</body>

</html>
