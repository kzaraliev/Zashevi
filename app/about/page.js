import Footer from "../footer";
import HeaderSection from "../headersection";

export const metadata = {
  title: "about page",
  description: "this is a test from about page",
};

export default function About() {
  return (
    <>
      <HeaderSection />
      <div className="max-w-[80%] mx-auto mt-8 mb-8">
        <h1>Hello ABOUT TEST</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          nunc tellus. Praesent euismod placerat neque eget lacinia. Aenean
          interdum ex leo, faucibus tempor nisi mattis in. Duis laoreet egestas
          nibh, ornare viverra mi pulvinar et. Curabitur ex quam, dictum sed
          viverra id, rhoncus porta nunc. In lacinia dictum urna, in faucibus
          massa. Morbi aliquam elit quis ipsum rutrum, sed auctor felis
          tristique. Integer nisi orci, vehicula id ipsum quis, dignissim
          posuere massa. Praesent gravida vitae tortor vel rhoncus. Sed
          convallis, elit rutrum pellentesque euismod, massa neque lobortis sem,
          in blandit turpis lorem quis sem. Fusce auctor pulvinar egestas. Duis
          quis elementum elit. Praesent convallis, dui id vestibulum vehicula,
          orci magna sodales justo, eu molestie mi nibh in mauris. Aliquam
          placerat lorem neque, ac feugiat est faucibus vel. Curabitur sit amet
          venenatis ipsum, vitae pellentesque nulla. Proin sodales commodo
          lectus eget tempor. Nam vitae magna eget libero eleifend convallis sed
          eu velit. Aliquam at nulla et turpis venenatis tincidunt. Nullam at
          suscipit lectus. Fusce viverra condimentum auctor. Donec a condimentum
          est, nec molestie ex. Quisque quis suscipit augue. Quisque gravida,
          leo et aliquam commodo, ligula massa luctus enim, sed efficitur lectus
          augue et leo. Proin malesuada efficitur luctus. Quisque egestas erat
          velit, sit amet fringilla velit vehicula quis. Phasellus lobortis
          auctor lectus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec sed massa a ex malesuada sagittis. Nunc in purus
          sagittis, sodales augue id, porta libero. Sed eu mauris pharetra,
          laoreet leo nec, tristique odio. Nunc magna augue, eleifend vel nulla
          et, scelerisque convallis leo. Duis quis sem eros. Nulla ut hendrerit
          neque. Proin eleifend nunc ac mi ultricies facilisis. Nulla vel orci
          tempus, dictum lorem a, vestibulum turpis. Ut feugiat nulla velit, vel
          dictum velit porttitor vel. Proin tempor fermentum felis tempor
          dignissim. Duis et lorem tellus. Quisque quis tristique ligula.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Donec a ligula finibus, fermentum massa vel,
          laoreet ante. Phasellus ac quam ut diam sollicitudin aliquet.
          Pellentesque at molestie metus, ut pulvinar diam. Curabitur blandit
          dolor vitae turpis accumsan viverra. Morbi iaculis hendrerit erat vel
          ornare. Vivamus fringilla, orci eget porttitor aliquet, felis elit
          lobortis neque, quis consectetur justo ipsum non nisi. Aliquam
          porttitor ut tortor nec consequat. Phasellus volutpat imperdiet arcu
          eget feugiat. Aliquam rutrum sodales iaculis. Aenean maximus imperdiet
          pellentesque. Mauris tristique diam ut tortor porta scelerisque.
          Suspendisse aliquam pharetra ex. Phasellus lorem urna, ullamcorper in
          rhoncus et, lacinia quis justo. Duis ex elit, congue in turpis et,
          posuere auctor nisi. In vitae accumsan turpis. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Quisque convallis, metus et
          commodo congue, est nulla blandit justo, et iaculis risus sapien vitae
          nisl
        </p>
      </div>

      <Footer />
    </>
  );
}
