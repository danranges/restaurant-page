import renderAbout from './about'

(function initialize() {
    renderAbout()

    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.id = 'footer'
    footer.innerHTML = `<p class="footer">Made by</p> 
                        <a class="footer" href=https://github.com/danranges> <img id="gh-logo" src="assets/GitHub-Mark-Light-120px-plus.png" alt="github logo"/></a>
                        <a class="footer" href=https://github.com/danranges>Dan Ranges</a>`
    document.body.appendChild(footer)

})()