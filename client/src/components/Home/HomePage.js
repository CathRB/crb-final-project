import {useState, useEffect} from "react"
import {

  } from "./styledHome"

const HomePage = () => {

/*     const [people, setPeople] = useState(null);

    useEffect(() => {
        fetch("/api/people")
        .then((response)=>response.json())
        .then(setPeople);

    }, [])
console.log(people)
    if(!people) return <h1>Loading...</h1> */

    return (
        <main>
        <h1>Welcom to My Garden</h1>

        <main>
            <p>General Explanation</p>
            <div>

                <section>
                    <p>Browser explanation</p>
                    <img></img>
                    <img></img>
                </section>

                <section>
                    <p>My Garden explanation</p>
                    <img></img>
                    <img></img>
                </section>

            </div>
        </main>
    <footer>This is a footer (with redirecting link?)</footer>
        </main>
    )
}

export default HomePage