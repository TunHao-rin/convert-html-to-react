import "../styles/project1.css";

export default function Project1() {
  return (
    <div className="page project1">
      <div className="page-inner">
        <main className="card">

            <div className="avatar">
                <img src="/72049b70-6247-11f0-b1b9-2b94c1f6d9f3.png"
                     alt="Manchester United Logo" />
            </div>

            <div className="info">

                <h1>Manchester United</h1>

                <p className="league">
                    Football Club - Manchester, England
                </p>

                <p className="bio">
                    Manchester United is a professional football club based in
                    Old Trafford, Greater Manchester, England. The club was
                    founded in 1878 and competes in the Premier League, the top
                    tier of English football.
                </p>

                <h2>Achievements of club</h2>

                <ul className="achivement">
                    <li>20 English League titles</li>
                    <li>12 FA Cups</li>
                    <li>5 League Cups</li>
                    <li>3 UEFA Champions League titles</li>
                    <li>1 FIFA Club World Cup</li>
                </ul>

                <div className="links">

                    <a href="https://www.manutd.com/en" className="primary">
                        Official Website
                    </a>

                    <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
                       className="secondary">
                        Wikipedia
                    </a>

                </div>

            </div>

        </main>
      </div>
    </div>
  );
}
