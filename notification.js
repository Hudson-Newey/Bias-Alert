let banner_source = `
<style>
    .bias-warning {
        position: fixed;
        width: 100%;
        height: 60px;
        left: 0px;
        bottom: 0px;
        background-color: #ff4f00;
        color: white;
        text-align: center;
        z-index: 9999999999;
    }

    #notification-text {
        font-size: 20px;
    }

    #close-banner-BTN {
        position: absolute;
        background-color: gray;
        color: white;
        right: 10px;
        top: 10px;
        border-radius: 10%;
        font-weight: bold;
    }
</style>

<div class="bias-warning">
    <p id="notification-text">Please be aware that information from this source may not be representative of the situation<br>
    {{LEANING}}</p>

    <button id="close-banner-BTN" onclick="document.getElementsByClassName('bias-warning')[0].remove()">Close</button>
</div>
`
