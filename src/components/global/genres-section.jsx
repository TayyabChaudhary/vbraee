import { Link } from 'react-router-dom'

export default function GenreSection() {
  return (
    <>
         <div className="cate_con mb-5">
                <div className="d-flex mb-4">
                  <h3 className="main_title mx-auto">Genres</h3>
                </div>

                <div className="d-flex flex-wrap justify-content-center">
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_action.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">Action</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_adventure.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">Adventure</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_fps.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">FPS / TPS</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_rpg.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">RPG</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_indie.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">Indie</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_simulation.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">Simulation</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_strategy.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">Strategy</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto px-2 mb-3">
                    <Link to={"/psn"}>
                      <div className="col cate_item d-flex flex-column text-center">
                        <img
                          src={"./assets/images/icons/cate_race.svg"}
                          alt=""
                          className="cate_item_img my-auto"
                        />
                        <p className="cate_item_text">Racing</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

    </>
  )
}
