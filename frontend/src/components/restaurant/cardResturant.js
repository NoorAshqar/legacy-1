import React, { useState } from 'react'
import {Link} from "react-router"
import "./cardResturant.css"

function CardResturant() {
    const [name, setName] = useState("Resturant Name")
    const [job, setJob] = useState("Rest Number")
    const [about, setAbout] = useState("Address Address Address Address Address Address Address Address")

    return (
        <div className='oneresdiv'>
            <div className="mainContainer">
                <div className="Card">
                    <div className="UpperContainer">
                        <div className="imgContainer">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExISFRUVFxUXFRUVFRUXFRUVFRUXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHSUtKy0tLS0tLS0tLS0tLS0tLSstLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EADkQAAEDAgQEAwcDAwQDAQAAAAEAAhEDIQQFEjFBUWFxIoGRBhOhscHR8DJC4RRS8RUjYnJDgpIz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACYRAAIDAAICAgICAwEAAAAAAAABAgMREiEEMRNBMlEUIkJhcRX/2gAMAwEAAhEDEQA/ANQcQEjsUFmMVmkFVKmb9ULuRSgbD+rCX+qCxozU807/AFUqfMXwNj/VhKzFArEuzYq7gMylWrUyOs2DXylLkKoY4JtbMAOKZzQHEKmoFXrXQkZkJ3VuniQVSmmTjhTxrEKrArQVgCgmNcAUuSDQPdUupNaqV6oBXU8RNigQTL5rQEz+rPNUa1QqNj5KFyJhqMtxBPFaTDOssplNlp8M8QtMH0Kki3KWUwOSyjBHJZTUqhBZXJEihBZXJFyhDyqu+VVcCpdSRcvTVhG2U8kpwCRyLkQjLlPQxGlV3KJ7laZA7TzO26jqY4lAvfqVtdW9ZFgVbiUSwmYcJWZOIVPF5lptN+iutPSSw2OKzdoPG28fdBMZm+oHvA4LONxrj2VbEOcBOq28Tf0WgDDQNxZPH0hTsxAEX81kP6x42ld/qT9iVXFk03hdKibYrKYHNXyGmoA3iS2YHlcooM6YDxdHGIk9lTgyaavBYjSjVDMuqwdDPqRtJHdF6NbUAQVE2is02uHxs8USo1JWWytp5rR4UJ0XoDRbSpsrpRAjlyZrSyoQVculcoQ8bD04VFXJStK5zRoLjXpHPUbFz0JY01Ex10xzkgciKEIQLMa0uidvyyM164Cz+JMknndPqX2UxrKnVXcOwOuTtuh7Wk7SrVKm4cPzqmSLiLiHOJAiI6JlNnNXaLv+PS6sNpNP7e3+EHLA+GgpzgOBNvTr3VR9zy6IvVwvXfjyVcYEk+SJSQDiykCQFweVeOGb6b97qMUW3ifP4I1IHiVXFGskzV1OGnYoa+hy4fgHwXe6hRvSYerezeYMcBcco2I47LX0KoIsvGclxZDrkwCI4GI/PRegZfnEiDuNyOPIjyVcsJhqjUCr1sSAgT83HNUcRmk8VTsB4h+pmAHFKzMhzWLxGOJO6azHOS/mC4G4/wBQHNcsZ/XuXKfOicAG6mlZSVz3a7Qs70IhaxKaalATkPZZSfSVeq2ETeEAzyvBDB3+yZBa8IVcbWBBAMoeYIifzgnPEW9VFqutSWIEt4VsJ7q0mx/O6pOfKt4XDvdsED/bGL9IvUXgiAfzoptIHCe906hlDo3AKnZhHNtOrsLpTlEcoy/RTkm0JIP93p8lbOE3/UOirYikQq0mENal8Z7pzqAIB9fjKaNW5BTmg8LK9K4lXE0y0mNuiZTfKJOpki9z05Km2npJHA+o6hHGWgShnZFRJDrWWjwtcgceqAvZBHFFMJU9Fc/QsIurk8U0VCokiTpeE4urFJqpscVcpOQSZaJ9C5JrXJXZZIaSaaavupphprpuCM/Io+7TTTV400x1NC60XyKLmrH5g+a1QngYHkt0+ksdn2F0VieDwCO+xUUMLT0F1TYfFVwpayZ7sjiPW6JlosYWhJ6cfstBgqBsAfTh5oRhBtFhzvdaHLgAOXzPVZbZGqmPZbp5e47ucegMf5VgZRPE9byreHFlbphY3Nm+NaB1DJhtf0+qnOQTvYdhKL4YBFC4Fqr5GX8cTHvyRg4T1NyqtTKmjmPNamtTVPE0gqU2W60Zl+BgHqqGKwkDstW+ih2Mw43TY2dip1IxOJJaZKsYPEXHJOzfD7kcFQwT79r+i3xfKJzZrizV0xYKf3CdgKE23iCfOQPlKJsw6VKtg6DRQhSNYUR9wmOooHFhLCiuVn3K5VwZfQULU3QnFcuphi0YWJjmKZNIVcS9K7mLM5vQ96S2fFJ09Oc/AeRWmxlTS0lVcDgXAnSxpdYve8mAXeLQ1oF7H4pF9irRooqdjPOsXTc0w4EEJlEHkPNb3O8jbXb+gMrAWi4cB14/RYqnQgw4EEbg2hKjapobOlwfZfwNMkzY/mwR3A09vyf4VLKcMX2Fm8TxPQLU4XDNaLBZbZ94a6K97JcMwwrTaaYx4bulZiXOs1vmVla02ppE9NqusNlRbiHj9TR5fypqeMad7HqqcS+SZK5sqpikQYQQh+LVEKBcquLiFcLULx74TIrWLk+jO5pF0FwtL93Nwb6g/ZFc1dAJUWQ4U1D0YWk9yYH1XTqXRybn2bjJ6AA/9GT3Ez8kSFBQ5XTnUeoHoJ+qIvWnDLpU90kNBSmonscCqcUXyKf9OuV/SuVcEXyKRSLpXJwk5IU5NKhZSxon0+ZhXMCSdV7EsJ/+RPlZV8QyXDlx8tlJhKkBone3pcfA/BYPOi8TOj4EkpNE2ZV6TQXF0Fu3Qxvb5LFZ1TaSHjiZI73WvZhGuedTXmNhYT8RAQLPcuMvdENAmOpPy5rFU0mbbotodkrbBHgIQTIj4BzR6mJQW/kMpX9R1Khq3TsRmmHoWc8auDRc+gupW4WeJ9VC/A4cWfTB4/hQRa+w2n9FDM/ainSAL6VYB2xLDdR4HNqdcTTJ7EEH0KTOsswtcDU5/hnTcyJ377JciyWmz9OrTf8AUIJ6ymtV8dW6Kj8vLvMDOEkBVswrQibGw1Z3OHEmBx4pUe2Nk8RF7x77M9VFXyl7hJcZVrB4VzgdT302DYUw0ud1JO3pKzIfmTHGdRA4ODTI6FaIRf00Zpy/aZTz2g5oI4Ip7H02+6fNzIMef+FXzqvrpFx3IM8wRzHBT5bg3sYyozgII7X89luobaOf5CSfRtcuZDOpJnvKXF1YCoZZmHAgjmDwJHPrunZi+y1GQo18whTYTHSs1jKxlTYGsUGhYa8YpchQqLlelBGEoToSwmaANTSnwkIVkK9YxfoVUf8A7e/HwzyBO47IhUpyPqq2OoksPPl5oLIKSxh1zcJJoIMoANabBxjxD9wKizShV0FpgtIIkdeEHrHoq2ExopQXElgvG8dVdx3tVhGt1l+o8GtBJngI4ea4tlM65Zmncrvrsju4Z/A09IIPAo5gtkDoYn3hDtOkuAdHKUcwtoQWjKQxhqUqPG0J4FS4KqiNerTLbi6QaPRnGYeOasspBQ4vGjVoYJPIcOpPBLSY421CeM2j1V4ytQ99eLIFjbuWhZhJnU9vQ8/RAc0wh1eE3lHD2DP0OoAkR8lPUou07yky54NjuN0QxFO1lbfYKjqMHnFMmRFyQNuZWgyxhazRAsBvxlVa1GazRzn5R9UYp04LeUfWV1vGX9dON5X54ValIU3t5OsRvHL4kfFSYwWTsXcQOfh/O6nxNNaTIY7F0CXKfB0EWqYS6loYSFXEvRgpLkRFFcphWjlySUkpmAjpSJsrpVYQeEpCaE5WQF5nhhBPNA8TlwcJn1Wmx9IlhjeFQbQBAHOSe0IJIOLKWGqSWO6Qe4WipbIO/CgWbykdx+BEMuryIO4XG8iGPDt+NPVoToVYVXG5g5x92zc7ngBzKmFOVG3Ki4kNcW23ETPms8c3s1Sb+gvk9CmxukxJuTxJ5kohjcBSe2SGujmAUKy3LmuAaazw8GC20nlFr+SnrZVXAcG1iDrDWtcGyRAvIjr6I+Ivl3j6B1XCwYpkM7Dw945oXiMC4GXVnT/xGkHvuT5QimLwGLp6v0P0iSdvTmVncfjcQ2NVPUSTDWEOd4f1GOABsrjFkk4lihTLSXapcTO0DsAjT6w0SgmWYeq90lpaI/cIieamzaqKbInYKpLXhIyyOkWEeHVnECzWx5n+B8USHPYARPzVDLcG9lO8Bz7md/FFvIBE2Uj6flhw7rtUw4QSOFfPnNsjYzU7awv25DvxVl7U+m0AQEpThDKppJ7aalhLChBmlcnrlCA+V0pCUoKIo5IlJSBQsc0p8pgSqiClROoCQQpE5QhXq04LT1j1UeYYN1M+8aJH7h9V2Nq+JrRzk+Wy0mHph7Fx/NklZ0djwot19gjLcU1wF0doNHBZXMcvdRdrp7cW/UfZXMoz9pOl1jtdY5R3tG2M/pmhqYYOvxUGNLmxpdUHGCdQmIkK7QqtdxUOKIUUsDTAeJxlSINQxxBmDHPmgteuXOkRqNiQIAEkwPUrSYvTGyz+Id4oaJcdhy+ydB70hdklHvMC1NzRTl5hvG8av4QzD4b3tT3hbDG3Y08TwcRyUlLCkwah1Rs39o+5V5jlu8fxOL5TOX5PmclxgTNbeU9Rtcn6lvOeculNJTdSsg9Ko9SXUqIPXJmpcoQpELg1HvZbANqPLjfREDmTP2WrflzHHUWiekDyEJNl6g8wfXRyWtmCwuUVqn6WHzICkr5FiGCTTMdCCvQKOH0CwAHJLXDtEtieG6R/Kl+h38aDeLTzKrRe27mOHcEKEvWi9pGVnaWPJaC6e8AxHRAamVxeSe5U/nJe12H/AOe96l0QurtHH0VatinOs2w+KmqUwLAKJtNJn5cpeuhsPDjH32Umg61r8ory1Z6nQkohllQtdpKx2vkbK1gZxlIOCy+Z5UHGQCHcwPnzWm94kCTGbiOlBMxNTH4zCiXU3OZz5d+XmkHtw0/qa8eU/VbPEPEQs1jPZ2hUJJZpJ/tt8E6M4P8AJCpRmvxYJx3tm0jwMcT1gBDMmz+t74N06/eOA0jeSbQfujVT2Ppbhz/UfZar2D9nKLXmoGfpEAm5k737fNaq7YQ/BdmW2uc/zfQZwOQNLfESXdJgdFBjfZ9zWl7DqA3H7h91r6NOdrNFrcefkpK1LxahaAOxHG3FNjdNPdM8qoPpI82anakQznBGm8mPC4kiNh0Q4rfGSktRglFxeMWUi4JURQi5KkJUIckXSkUIFPZPGFlUt31j4tv8pW8qVQ0SYA5rzHJXxXpH/mB/9WPzW7zmdDBynssPlLJadDw4/JkS+XBzbO3G4un09htyk8UJyZwvfy57X+avVqwBuYAFzyWbejROvjLigV7WNJpB39rwfIyN/MLJVaphaj2hxrHUHNAiNJHXS4FZKvdZrPZprTisZVqlQhWDTThTVaHh1FsBShviDguYFO0IGw1Eskri9QgroSwxXEKKpUUxpqJ9FEimis8lbnKMN7mg1gHicJP/AGP2+iy2VYcGtTB21D4XhbzEcOdgO5t+dk+pfZl8h5iG0xpaL2mOnU9Qoc4xraDC93k0Hc8C0q8W23sNjxCwOf1/e1HGZaCQ2NrcQmzliE1w5MC47N6heXucHahBaf0xY+GP07bpmGzJj7E6TyP0KlfhG8kPxWEbyRUeS4dEu8RT79BgFKs/QxVSkYu5vI7jsUbo1g4BwNiupXbGxdHLtplW+yVckBSpgoauTkihCjVrlkFv6pEdwZXqdKq2tTDgJDgDfqJXkoGqoBwaPiV6F7IYzwmieF2dv3D6+q5vk27bxOnRU1VzXsLuYGQ1gALvgBufzolxOCD26ZiLk8+/NPiahPJoA8zf5BTNgjz7bJXsJScXqBtbKmGk9rruLXCeFxaAsHMgHmAvSn1Ba28gz8FgMyw2h7mi7ZJaRtBMgeWyRajVVJybbKMLinQmuKSaDmuUrXKFSsCplok1JwemSlAQhE4ckc9RpYUISYSppqMdyc0nyIW7DgTJEwPIco6/ZefwtJgca57GNjxbX4xMHta5T6n9Ga+O4y3nWIcaT9Eg21HYhpMHzKybwtzUwk0nMm7gZPMkfD+FiGXCl3WMrx8aaIDRUT8Kr4al0pOmjAFisKI2VHC1vdPAJ8LjHY8Cj+LYs3nFOxWnx7XGSM3k1KUWg8CllU8BX102u5i/fYqxK7q77OC1nQ+UqilcoUVstbLiev8AC0WDeWEOFiLhBsnpQEaYF5y6fKbZ6WmHGCRq8DjWv8cgAiCDwI4T5q02uCNQNjt2WLGJNOYuD+pp2PI9xzVvKc3YXlofc7tduORCdXZqEWUJJvTTuM2Qh2VODgJDmncm9uNrfhROnUH26lPcmtCFKSTS+wLifZ6k6S1xZ8W+iEYj2eqtu3S8dLH0Wt0B3b591IlutMNWtGAqZfUYfEwjy+qcKa1+Y4cvAI34jmFDl2CIdLhEbbJbrNUbFw5N9mT92pBSPVbgtE/pvHRN1AW08+Snxf7F/wAj/RjmYR7hIY4jmBZSty6qf/G70RfF468AOb02I6QP5U+VZgSdLjvtPylT4l6YanJw5xzAdl+ROcZqeFvLienQI8MMNWoNEtEAi1uXz9VO4C0mx/LKRlMAzxiPLfZNjBL0Zpzcu2SMMiV59X8L3jk5w9HELegmYEb3n+3jHVYXOgBVqf8Acn1MoLvSD8fpsRrpT4VPAvmQeB/wrcrK+jYnpDiGyFn82p+ErRVtkEzJtimQfYE10UPZ6p4XN/tM+R/wUXQDJXxVcObfkf5KPSu9TLYI4F0cmxZXLpSJwrAhgKMAK/pXYenAT6gXl2z06KWJNkGY0Cuw2uYv1EItiSgbYfiqNM7F4J/9fF9AnVLsVa8R6fh9gTHPqp/wqvT2VgGy1GAoPzJgNmk8yIHzVhtdjxaDEdweEoY/AODoiRz/AMK5g8IWkkxcDnM9tkK0faoJJwLDARN9zZdSpkXTmG/bonuPWPS6gsicPFqk7RE2790tRur6qKvXDd/RRHMGiIE87iw52+ShbTzkK7DtNnNabRqgTEzv3T6OEa02BnmdlLqBS0nGSOWx5qYRSaWL0dAMSLjYkbd/upKdXgRHy8ui6pNiBPO/D6pZ4H/HZWkC2V8RjmMIlx3INjbjwCxvtDU/3qnUg+WkLYYhuqWxPfbuDwKx/tXhC1oe1rjEhzpuATIlsbdUE46g63j0E5biZcfIHuJRgP26rNZQ7xujay0rI3KzWLGbK3qOqhCMwFkXe4c0Kx5EKo+wpejP4ExXHZ3yR0OQLDf/ALjs75Iyu74v4HC8n8yXUuUS5aDOa5osoazkFp+0DOYTa2dt5rzfxs9JzRPjqsAoTkFM1cUHDZp+Au76BUszzbV4W7usFpPZOmyiwvO5sOw3PmVsohxi5MxXz5NRRrsHiWyWzt+WV9gAAAi3BZPEPg+8Y4bz68OqOYbF7TaRuoVNR/xYQcT+fZIXpBUHMeqiqVmggEiTaJUYJZY4LgTeY6Ry69VBRqtNmlpjkR9FM921p5qF5nQLzPDOcdQBMWgC/dUKdJ82a6exCPndJMjkUOD43uMcwbQbpa0che834qSFEXp9IGL/AAsrQhkjHoPis0cT4bCehJ7oq6oBaQheIp0tUkm/C0fJW9DqlBP+yH5bUc43k7mZ2k7dforNWmDd3KPwIdXzmlSBuBHMrM5n7ZME6bnmi4tim0m89E3tFhqdBwqMsHEgjhO4IHDis7jPaEN2QjPPaF9aAdpQR75Q/Ct7DVzSxByp7SuVWr7QE7oM8qCoU1VRFu6Rp8lxYfWHZ3yWklYH2dqxiGdZHqCt0t1KyOGO57LR8pVGuTRJjg88ymurO5lcuXLOmWfZ/wAVVxN4bbpJRqljKmrTqMAbWXLk9r+iEx/NhjC4p8DxFHqNdxG65cs8hsS/hqhLTJmLieB5oYcS9z6pLidJhvQHcLlyH9lv8o/9JcPWcCCDBWlo1CQL8ly5Ajb5P0IHknz+qeVy5UZn7G6QLgXO55plSqQN1y5EgWBcdi3j9xWYzbHVJPjK5cnRFyMvicQ9zoc4lVqq5cn/AEJB2L2HdRpVyCQUSN6geuXKIjJcsP8AvU/+7fmvQ1y5aqvRnsFXLlyaLP/Z"
                                alt="" height="100px" width="100px" />
                        </div>
                    </div>
                    <div className="LowerContainer">
                        <h3>{name}</h3>
                        <h4>{job}</h4>
                        <p>{about}</p>
                        <button className="B">Add to Faviorate</button>
                        <br></br>
                        <button className="B">Add your FeedBack</button>
                        <Link to="/Category/:category/:rest/feedback"></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardResturant