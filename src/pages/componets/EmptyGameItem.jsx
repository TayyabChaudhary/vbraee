
export default function EmptyGameItem() {
  return (
    <>
      <div className="game_item">
        <div
          className="col empty_game_item_cont d-flex justify-content-center align-items-center "
          style={{
            backgroundImage: " url('../assets/images/empty_game.png')",
          }}>
            <img src={'../assets/images/fade_logo.png'} alt="" className="col-10" />
          </div>
      </div>
    </>
  );
}
