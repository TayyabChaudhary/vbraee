/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavContext } from "../../store/NavContext";
import MenuSideBarContent from "./MenuSideBarContent";
import AccountSideBarContent from "./account/AccountSideBarContent";
import CustomDropdown from "./utility/CustomDropdown";
import { ModalContext } from "../../store/ModalContext";
import UserDetails from "../../components/common/profile/user-details";
import { useGetCurrentUserQuery } from "../../api/authApi";
import Avatar from "../../components/common/profile/avatar";

function SearchResult({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="col-12 search_result_con d-flex flex-column position-absolute">
          <div className="search_result_cont d-flex gap-3 align-items-start mb-3">
            <img
              src={"../assets/images/game1.png"}
              alt=""
              className="col-auto search_result_img"
            />
            <div className="col-9">
              <p className="cart_item_name truncate mb-1">
                Resident Evil 2 Xbox One / Series X|S [Digital Code] GLOBAL
              </p>
              <div className="d-flex gap-2 align-items-center">
                <p className="cart_item_price text-white">
                  $7.<span>75</span>
                </p>
                <span className="cart_item_dis">-26%</span>
              </div>
              <div className="d-flex align-items-end gap-3">
                <div className="d-flex flex-wrap">
                  <span className="game_badge type2 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                      />
                    </svg>
                    Hot
                  </span>
                  <span className="game_badge type3 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                      />
                    </svg>
                    Instant
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                      />
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="search_result_cont d-flex gap-3 align-items-start mb-3">
            <img
              src={"../assets/images/game1.png"}
              alt=""
              className="col-auto search_result_img"
            />
            <div className="col-9">
              <p className="cart_item_name truncate mb-1">
                Resident Evil 2 Xbox One / Series X|S [Digital Code] GLOBAL
              </p>
              <div className="d-flex gap-2 align-items-center">
                <p className="cart_item_price text-white">
                  $7.<span>75</span>
                </p>
                <span className="cart_item_dis">-26%</span>
              </div>
              <div className="d-flex align-items-end gap-3">
                <div className="d-flex flex-wrap">
                  <span className="game_badge type2 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                      />
                    </svg>
                    Hot
                  </span>
                  <span className="game_badge type3 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                      />
                    </svg>
                    Instant
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                      />
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="search_result_cont d-flex gap-3 align-items-start mb-3">
            <img
              src={"../assets/images/game1.png"}
              alt=""
              className="col-auto search_result_img"
            />
            <div className="col-9">
              <p className="cart_item_name truncate mb-1">
                Resident Evil 2 Xbox One / Series X|S [Digital Code] GLOBAL
              </p>
              <div className="d-flex gap-2 align-items-center">
                <p className="cart_item_price text-white">
                  $7.<span>75</span>
                </p>
                <span className="cart_item_dis">-26%</span>
              </div>
              <div className="d-flex align-items-end gap-3">
                <div className="d-flex flex-wrap">
                  <span className="game_badge type2 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                      />
                    </svg>
                    Hot
                  </span>
                  <span className="game_badge type3 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                      />
                    </svg>
                    Instant
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                      />
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="search_result_cont d-flex gap-3 align-items-start mb-3">
            <img
              src={"../assets/images/game1.png"}
              alt=""
              className="col-auto search_result_img"
            />
            <div className="col-9">
              <p className="cart_item_name truncate mb-1">
                Resident Evil 2 Xbox One / Series X|S [Digital Code] GLOBAL
              </p>
              <div className="d-flex gap-2 align-items-center">
                <p className="cart_item_price text-white">
                  $7.<span>75</span>
                </p>
                <span className="cart_item_dis">-26%</span>
              </div>
              <div className="d-flex align-items-end gap-3">
                <div className="d-flex flex-wrap">
                  <span className="game_badge type2 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                      />
                    </svg>
                    Hot
                  </span>
                  <span className="game_badge type3 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                      />
                    </svg>
                    Instant
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                      />
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="search_result_cont d-flex gap-3 align-items-start mb-3">
            <img
              src={"../assets/images/game1.png"}
              alt=""
              className="col-auto search_result_img"
            />
            <div className="col-9">
              <p className="cart_item_name truncate mb-1">
                Resident Evil 2 Xbox One / Series X|S [Digital Code] GLOBAL
              </p>
              <div className="d-flex gap-2 align-items-center">
                <p className="cart_item_price text-white">
                  $7.<span>75</span>
                </p>
                <span className="cart_item_dis">-26%</span>
              </div>
              <div className="d-flex align-items-end gap-3">
                <div className="d-flex flex-wrap">
                  <span className="game_badge type2 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256">
                      <path
                        fill="currentColor"
                        d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                      />
                    </svg>
                    Hot
                  </span>
                  <span className="game_badge type3 me-1 mb-1">
                    <svg
                      className="me-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                      />
                    </svg>
                    Instant
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                      />
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="game_img_icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto d-flex gap-3 justify-content-center align-items-center mt-auto">
            <p className="search_result_text mb-0">122 Results Found</p>
            <Link to={"/psn"} className="search_result_text link">
              See All
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m9 5l7 7l-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function MobileSearch({ isOpen, onClose }) {
  const [searchInput, setSearchInput] = useState("");

  const [isResultOpen, setResultOpen] = useState(false);

  function handleSearchInput(e) {
    setSearchInput(e.target.value);

    // Display a message when typing starts
    if (e.target.value) {
      setResultOpen(true);
    } else {
      setResultOpen(false);
    }
  }
  if (isOpen) {
    return (
      <div className="mob_search_con d-flex gap-3 align-items-center position-absolute">
        <div className="mob_search_cont d-flex gap-3">
          <span className="mob_header_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></path>
            </svg>
          </span>
          <input
            type="text"
            className="box"
            placeholder="Find your games..."
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
        <span className="mob_header_icon dark" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
          </svg>
        </span>

        {/* Search Result */}
        <SearchResult isOpen={isResultOpen} />
      </div>
    );
  }
}

export default function MainHeader({
  showHeader,
  isAccount,
  breadCrums,
  activeLink,
  activeCategory,
}) {
  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const isVisible = showHeader ?? true;
  const { userInfo } = useContext(ModalContext);
  const { data: user } = useGetCurrentUserQuery();

  const { isSideMenuOpen, OpenSideMenu, CloseSideMenu } =
    useContext(NavContext);

  const { OpenModal } = useContext(ModalContext); //Modal Global State

  const [searchInput, setSearchInput] = useState("");

  const [headerBg, setHeaderBg] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false);

  function OpenSearchBar() {
    setIsSearchOpen(true);
  }
  function CloseSearchBar() {
    setIsSearchOpen(false);
  }

  function handleSearchInput(e) {
    setSearchInput(e.target.value);

    // Display a message when typing starts
    if (e.target.value) {
      setIsSearchResultOpen(true);
    } else {
      setIsSearchResultOpen(false);
    }
  }

  const location = useLocation();

  // Use useEffect to close the menu when the route changes
  useEffect(() => {
    if (isSideMenuOpen) {
      CloseSideMenu(); // Close the menu when the route changes
    }
  }, [location]);

  const threshold = 10; // The scroll height at which the header changes color

  useEffect(() => {
    const scrollableSection = document.getElementById("scrollable-section");

    const handleScroll = () => {
      if (scrollableSection.scrollTop > threshold) {
        setHeaderBg("header_bg"); // Replace with the color you want
      } else {
        setHeaderBg(""); // Original color
      }
    };

    scrollableSection.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      scrollableSection.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <>
      {/* Mobile Header */}
      <div className="mob_header_con d-lg-none">
        <div className="mob_header_cont position-relative">
          <div className="mob_header d-flex align-items-center gap-3">
            <div className="col d-flex gap-3 align-items-center">
              {isSideMenuOpen ? (
                <span className="mob_header_icon light" onClick={CloseSideMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
                  </svg>
                </span>
              ) : (
                <span className="mob_header_icon" onClick={OpenSideMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"
                    />
                  </svg>
                </span>
              )}

              <Link to={"/"}>
                <img
                  src="../assets/images/logo2.png"
                  alt=""
                  className="mob_header_img"
                />
              </Link>
            </div>

            {/* Mobile Screen */}
            <div className="col-auto d-flex d-md-none gap-2 align-items-center">
              <span className="mob_header_icon" onClick={OpenSearchBar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></path>
                </svg>
              </span>
              <CustomDropdown
                trigger={() => (
                  <span className="mob_header_icon position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.945 15.512c-.8-.786-1.619-1.6-1.619-5.44a7.835 7.835 0 0 0-6.539-7.717l-.046-.006a1.5 1.5 0 1 0-2.471.005l-.003-.005c-3.753.623-6.579 3.843-6.584 7.723v.001c0 3.84-.822 4.655-1.619 5.44A3.135 3.135 0 0 0 3.137 21h4.367a3 3 0 1 0 6 0h4.37a3.135 3.135 0 0 0 2.076-5.484l-.003-.003zm-9.441 6.613A1.127 1.127 0 0 1 9.379 21h2.251a1.127 1.127 0 0 1-1.126 1.125m7.36-3.376H3.138a.886.886 0 0 1-.625-1.509c1.34-1.34 2.418-2.612 2.418-7.17a5.572 5.572 0 0 1 11.144 0c0 4.578 1.089 5.84 2.418 7.17a.886.886 0 0 1-.625 1.509z"></path>
                    </svg>
                    <span className="header_cart_num d-flex justify-content-center align-items-center position-absolute">
                      1
                    </span>
                  </span>
                )}
                content={
                  <div className="header_drop_cont big position-absolute">
                    <Link to={"/account/notifications"}>
                      <div className="col-12 d-flex align-items-center gap-2 px-2">
                        <div className="col-auto">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_noti_img small"
                          />
                        </div>
                        <div className="col">
                          <p className="acct_noti_title text-truncate col-8">
                            Tekken 8 Xbox Series X | S Private Account Global
                          </p>
                          <p className="acct_noti_date small">
                            December 19, 2013
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr className="header_drop_line my-1" />
                    <Link to={"/account/notifications"}>
                      <div className="col-12 d-flex align-items-center gap-2 px-2">
                        <div className="col-auto">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_noti_img small"
                          />
                        </div>
                        <div className="col">
                          <p className="acct_noti_title text-truncate col-8">
                            Tekken 8 Xbox Series X | S Private Account Global
                          </p>
                          <p className="acct_noti_date small">
                            December 19, 2013
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr className="header_drop_line my-1" />
                    <Link to={"/account/notifications"}>
                      <div className="col-12 d-flex align-items-center gap-2 px-2">
                        <div className="col-auto">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_noti_img small"
                          />
                        </div>
                        <div className="col">
                          <p className="acct_noti_title text-truncate col-8">
                            Tekken 8 Xbox Series X | S Private Account Global
                          </p>
                          <p className="acct_noti_date small">
                            December 19, 2013
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr className="header_drop_line my-1" />

                    <Link to={"/account/notifications"}>
                      <p className="header_drop_text text-center">See All</p>
                    </Link>
                  </div>
                }
              />

              <CustomDropdown
                trigger={() =>
                  isAccount ? (
                    <img
                      src={"../assets/images/user.png"}
                      alt=""
                      className="header_user_img"
                    />
                  ) : (
                    <span className="mob_header_icon position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                        />
                      </svg>
                      <div className="header_user_dot position-absolute"></div>
                    </span>
                  )
                }
                content={
                  userInfo ? (
                    <div className="header_drop_cont position-absolute">
                      {/* <Link to={"/how-to-sell"} className="col-12 d-flex px-3">
                        <button type="button" className="col main_button">
                          Sell now
                        </button>
                      </Link> */}
                      <Link to={"/account"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                              />
                            </svg>
                          </span>
                          Account
                        </p>
                      </Link>
                      <Link to={"/account/messages"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg width="1em" height="1em" viewBox="0 0 20 20">
                              <g fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884"></path>
                                <path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path>
                              </g>
                            </svg>
                          </span>
                          Messages
                          <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                            2
                          </span>
                        </p>
                      </Link>
                      <Link to={"/account/wishlist"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path>
                            </svg>
                          </span>
                          Wishlist
                        </p>
                      </Link>
                      <Link to={"/account/notifications"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.4615 16.4285C12.4615 17.1105 12.2022 17.7646 11.7406 18.2468C11.2789 18.7291 10.6528 19 10 19C9.34716 19 8.72106 18.7291 8.25943 18.2468C7.7978 17.7646 7.53846 17.1105 7.53846 16.4285H12.4615ZM16.1538 15.1428H2.73846C2.54261 15.1428 2.35478 15.0615 2.21629 14.9169C2.0778 14.7722 2 14.576 2 14.3714C2 14.1668 2.0778 13.9706 2.21629 13.8259C2.35478 13.6812 2.54261 13.6 2.73846 13.6H3.84615V8.71419C3.84615 5.60274 5.96308 3.00557 8.77538 2.41414C8.75821 2.23536 8.77709 2.05481 8.83081 1.88413C8.88453 1.71344 8.9719 1.55642 9.08729 1.42317C9.20267 1.28993 9.34351 1.18343 9.50072 1.11055C9.65792 1.03766 9.82801 1 10 1C10.172 1 10.3421 1.03766 10.4993 1.11055C10.6565 1.18343 10.7973 1.28993 10.9127 1.42317C11.0281 1.55642 11.1155 1.71344 11.1692 1.88413C11.2229 2.05481 11.2418 2.23536 11.2246 2.41414C12.6155 2.70969 13.8659 3.49824 14.7642 4.64631C15.6625 5.79438 16.1534 7.23143 16.1538 8.71419V13.6H17.2615C17.4574 13.6 17.6452 13.6812 17.7837 13.8259C17.9222 13.9706 18 14.1668 18 14.3714C18 14.576 17.9222 14.7722 17.7837 14.9169C17.6452 15.0615 17.4574 15.1428 17.2615 15.1428H16.1538Z" />
                            </svg>
                          </span>
                          Notifications
                          <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                            2
                          </span>
                        </p>
                      </Link>
                      <Link to={"/affiliate"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2891 12.9615C13.2891 12.9615 15.632 10.6385 16.4266 9.82056C18.9415 7.36673 17.6882 2.31184 17.6882 2.31184C17.6882 2.31184 12.6501 1.06039 10.1925 3.57148C8.27556 5.43639 7.03038 6.72874 7.03038 6.72874C7.03038 6.72874 3.88465 6.07438 2.00049 7.95565L12.0357 18C13.9198 16.0942 13.2891 12.9615 13.2891 12.9615ZM12.0603 5.59998C12.2124 5.44788 12.3931 5.32722 12.592 5.24489C12.7909 5.16257 13.0041 5.12019 13.2194 5.12019C13.4347 5.12019 13.6479 5.16257 13.8468 5.24489C14.0457 5.32722 14.2264 5.44788 14.3786 5.59998C14.6076 5.82883 14.7634 6.12032 14.8265 6.4376C14.8896 6.75488 14.857 7.08371 14.7329 7.38253C14.6089 7.68134 14.3989 7.93672 14.1295 8.1164C13.8601 8.29607 13.5434 8.39197 13.2194 8.39197C12.8955 8.39197 12.5788 8.29607 12.3094 8.1164C12.04 7.93672 11.83 7.68134 11.7059 7.38253C11.5819 7.08371 11.5493 6.75488 11.6124 6.4376C11.6754 6.12032 11.8313 5.82883 12.0603 5.59998ZM2.81969 17.1821C4.33608 17.1389 5.78777 16.5591 6.91569 15.5462L4.45809 13.0923C2.81969 13.9103 2.81969 17.1821 2.81969 17.1821Z" />
                            </svg>
                          </span>
                          Affiliate Program
                        </p>
                      </Link>

                      <hr className="header_drop_line my-2" />

                      <Link to={""}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          Log Out
                        </p>
                      </Link>
                    </div>
                  ) : (
                    <div className="header_drop_cont position-absolute">
                      <Link to={"/account/wishlist"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center position-relative">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path>
                            </svg>
                          </span>
                          Wishlist
                          <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                            2
                          </span>
                        </p>
                      </Link>
                      <Link to={"/affiliate"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2891 12.9615C13.2891 12.9615 15.632 10.6385 16.4266 9.82056C18.9415 7.36673 17.6882 2.31184 17.6882 2.31184C17.6882 2.31184 12.6501 1.06039 10.1925 3.57148C8.27556 5.43639 7.03038 6.72874 7.03038 6.72874C7.03038 6.72874 3.88465 6.07438 2.00049 7.95565L12.0357 18C13.9198 16.0942 13.2891 12.9615 13.2891 12.9615ZM12.0603 5.59998C12.2124 5.44788 12.3931 5.32722 12.592 5.24489C12.7909 5.16257 13.0041 5.12019 13.2194 5.12019C13.4347 5.12019 13.6479 5.16257 13.8468 5.24489C14.0457 5.32722 14.2264 5.44788 14.3786 5.59998C14.6076 5.82883 14.7634 6.12032 14.8265 6.4376C14.8896 6.75488 14.857 7.08371 14.7329 7.38253C14.6089 7.68134 14.3989 7.93672 14.1295 8.1164C13.8601 8.29607 13.5434 8.39197 13.2194 8.39197C12.8955 8.39197 12.5788 8.29607 12.3094 8.1164C12.04 7.93672 11.83 7.68134 11.7059 7.38253C11.5819 7.08371 11.5493 6.75488 11.6124 6.4376C11.6754 6.12032 11.8313 5.82883 12.0603 5.59998ZM2.81969 17.1821C4.33608 17.1389 5.78777 16.5591 6.91569 15.5462L4.45809 13.0923C2.81969 13.9103 2.81969 17.1821 2.81969 17.1821Z" />
                            </svg>
                          </span>
                          Affiliate program
                        </p>
                      </Link>

                      <hr className="header_drop_line mt-2 mb-3" />

                      <p className="header_drop_head">welcome! LOGIN With</p>

                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("login")}>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                          </svg>
                        </span>
                        Facebook
                      </p>
                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("login")}>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"></path>
                          </svg>
                        </span>
                        Google
                      </p>
                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("login")}>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11s-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9s-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12s.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08s.65.47 1.04.47c.42 0 .77-.16 1.07-.47s.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4s-4.07.77-5.65 2.35S4 9.81 4 12s.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></path>
                          </svg>
                        </span>
                        Login with email
                      </p>

                      <hr className="header_drop_line mt-2 mb-3" />

                      <p className="header_drop_head">
                        {"Don't have an account?"}
                      </p>

                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("register")}>
                        Sign up now!
                      </p>
                    </div>
                  )
                }
              />

              <Link to={"/cart"}>
                <span className="mob_header_icon position-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="header_cart_num d-flex justify-content-center align-items-center position-absolute">
                    2
                  </span>
                </span>
              </Link>
            </div>

            {/* Tablet Screen */}
            <div className="col-auto d-none d-md-flex align-items-center position-relative gap-3">
              <span className="mob_header_icon" onClick={OpenSearchBar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"></path>
                </svg>
              </span>

              <CustomDropdown
                trigger={() => (
                  <div className="header_cart active d-flex gap-1 align-items-center position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.88em"
                      height="1em"
                      viewBox="0 0 21 24">
                      <path
                        fill="currentColor"
                        d="M19.945 15.512c-.8-.786-1.619-1.6-1.619-5.44a7.835 7.835 0 0 0-6.539-7.717l-.046-.006a1.5 1.5 0 1 0-2.471.005l-.003-.005c-3.753.623-6.579 3.843-6.584 7.723v.001c0 3.84-.822 4.655-1.619 5.44A3.135 3.135 0 0 0 3.137 21h4.367a3 3 0 1 0 6 0h4.37a3.135 3.135 0 0 0 2.076-5.484l-.003-.003zm-9.441 6.613A1.127 1.127 0 0 1 9.379 21h2.251a1.127 1.127 0 0 1-1.126 1.125m7.36-3.376H3.138a.886.886 0 0 1-.625-1.509c1.34-1.34 2.418-2.612 2.418-7.17a5.572 5.572 0 0 1 11.144 0c0 4.578 1.089 5.84 2.418 7.17a.886.886 0 0 1-.625 1.509z"></path>
                    </svg>
                    <span className="header_cart_num d-flex justify-content-center align-items-center position-absolute">
                      2
                    </span>
                  </div>
                )}
                content={
                  <div className="header_drop_cont big position-absolute">
                    <Link to={"/account/notifications"}>
                      <div className="col-12 d-flex align-items-center gap-2 px-2">
                        <div className="col-auto">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_noti_img small"
                          />
                        </div>
                        <div className="col">
                          <p className="acct_noti_title text-truncate col-8">
                            Tekken 8 Xbox Series X | S Private Account Global
                          </p>
                          <p className="acct_noti_date small">
                            December 19, 2013
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr className="header_drop_line my-1" />
                    <Link to={"/account/notifications"}>
                      <div className="col-12 d-flex align-items-center gap-2 px-2">
                        <div className="col-auto">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_noti_img small"
                          />
                        </div>
                        <div className="col">
                          <p className="acct_noti_title text-truncate col-8">
                            Tekken 8 Xbox Series X | S Private Account Global
                          </p>
                          <p className="acct_noti_date small">
                            December 19, 2013
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr className="header_drop_line my-1" />
                    <Link to={"/account/notifications"}>
                      <div className="col-12 d-flex align-items-center gap-2 px-2">
                        <div className="col-auto">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_noti_img small"
                          />
                        </div>
                        <div className="col">
                          <p className="acct_noti_title text-truncate col-8">
                            Tekken 8 Xbox Series X | S Private Account Global
                          </p>
                          <p className="acct_noti_date small">
                            December 19, 2013
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr className="header_drop_line my-1" />

                    <Link to={"/account/notifications"}>
                      <p className="header_drop_text text-center">See All</p>
                    </Link>
                  </div>
                }
              />

              <CustomDropdown
                trigger={(isOpen) => (
                  <div
                    className="header_user d-flex gap-2 align-items-center"
                    role="button">
                    {isAccount ? (
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="header_user_img"
                      />
                    ) : (
                      <svg
                        className="user"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                        />
                      </svg>
                    )}
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"
                        />
                      </svg>
                    )}
                  </div>
                )}
                content={
                  isAccount ? (
                    <div className="header_drop_cont position-absolute">
                      <Link to={"/account/"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center position-relative">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path d="M12.4 12.4C11.5163 12.4 10.8 13.1163 10.8 14V16.4C10.8 17.2837 11.5163 18 12.4 18H12.4192C13.4217 18 14.2819 17.9474 15.0006 17.7876C15.7286 17.6258 16.3595 17.3438 16.8517 16.8517C17.3438 16.3595 17.6258 15.7286 17.7876 15.0006C17.861 14.6706 17.9094 14.3355 17.9411 13.9983C18.0241 13.1186 17.2837 12.4 16.4 12.4H12.4Z" />
                              <path d="M2 12.4192V10.8C2 9.91632 2.71634 9.2 3.6 9.2H7.6C8.48368 9.2 9.2 9.91632 9.2 10.8V16.4C9.2 17.2837 8.48368 18 7.6 18H7.5808C6.5783 18 5.7181 17.9474 4.99932 17.7876C4.27146 17.6258 3.64052 17.3438 3.14834 16.8517C2.65617 16.3595 2.37418 15.7286 2.21242 15.0006C2.05267 14.2819 2 13.4217 2 12.4192Z" />
                              <path d="M18 9.2C18 10.0837 17.2837 10.8 16.4 10.8H12.4C11.5163 10.8 10.8 10.0837 10.8 9.2V3.6C10.8 2.71634 11.5163 2 12.4 2H12.4192C13.4217 2 14.2819 2.05267 15.0006 2.21242C15.7286 2.37418 16.3595 2.65617 16.8517 3.14834C17.3438 3.64052 17.6258 4.27146 17.7876 4.99932C17.9474 5.7181 18 6.5783 18 7.5808V9.2Z" />
                              <path d="M9.2 3.6C9.2 2.71634 8.48368 2 7.6 2H7.5808C6.5783 2 5.7181 2.05267 4.99932 2.21242C4.27146 2.37418 3.64052 2.65617 3.14834 3.14834C2.65617 3.64052 2.37418 4.27146 2.21242 4.99932C2.13905 5.32944 2.09063 5.6645 2.05885 6.00168C1.97593 6.88144 2.71634 7.6 3.6 7.6H7.6C8.48368 7.6 9.2 6.88366 9.2 6V3.6Z" />
                            </svg>
                          </span>
                          Dashboard
                        </p>
                      </Link>
                      <Link to={"/account"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                              />
                            </svg>
                          </span>
                          Account
                        </p>
                      </Link>
                      <Link to={"/account/messages"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg width="1em" height="1em" viewBox="0 0 20 20">
                              <g fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884"></path>
                                <path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path>
                              </g>
                            </svg>
                          </span>
                          Messages
                          <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                            2
                          </span>
                        </p>
                      </Link>
                      <Link to={"/account/wishlist"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path>
                            </svg>
                          </span>
                          Wishlist
                        </p>
                      </Link>
                      <Link to={"/account/notifications"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.4615 16.4285C12.4615 17.1105 12.2022 17.7646 11.7406 18.2468C11.2789 18.7291 10.6528 19 10 19C9.34716 19 8.72106 18.7291 8.25943 18.2468C7.7978 17.7646 7.53846 17.1105 7.53846 16.4285H12.4615ZM16.1538 15.1428H2.73846C2.54261 15.1428 2.35478 15.0615 2.21629 14.9169C2.0778 14.7722 2 14.576 2 14.3714C2 14.1668 2.0778 13.9706 2.21629 13.8259C2.35478 13.6812 2.54261 13.6 2.73846 13.6H3.84615V8.71419C3.84615 5.60274 5.96308 3.00557 8.77538 2.41414C8.75821 2.23536 8.77709 2.05481 8.83081 1.88413C8.88453 1.71344 8.9719 1.55642 9.08729 1.42317C9.20267 1.28993 9.34351 1.18343 9.50072 1.11055C9.65792 1.03766 9.82801 1 10 1C10.172 1 10.3421 1.03766 10.4993 1.11055C10.6565 1.18343 10.7973 1.28993 10.9127 1.42317C11.0281 1.55642 11.1155 1.71344 11.1692 1.88413C11.2229 2.05481 11.2418 2.23536 11.2246 2.41414C12.6155 2.70969 13.8659 3.49824 14.7642 4.64631C15.6625 5.79438 16.1534 7.23143 16.1538 8.71419V13.6H17.2615C17.4574 13.6 17.6452 13.6812 17.7837 13.8259C17.9222 13.9706 18 14.1668 18 14.3714C18 14.576 17.9222 14.7722 17.7837 14.9169C17.6452 15.0615 17.4574 15.1428 17.2615 15.1428H16.1538Z" />
                            </svg>
                          </span>
                          Notifications
                          <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                            2
                          </span>
                        </p>
                      </Link>
                      <Link to={"/affiliate"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2891 12.9615C13.2891 12.9615 15.632 10.6385 16.4266 9.82056C18.9415 7.36673 17.6882 2.31184 17.6882 2.31184C17.6882 2.31184 12.6501 1.06039 10.1925 3.57148C8.27556 5.43639 7.03038 6.72874 7.03038 6.72874C7.03038 6.72874 3.88465 6.07438 2.00049 7.95565L12.0357 18C13.9198 16.0942 13.2891 12.9615 13.2891 12.9615ZM12.0603 5.59998C12.2124 5.44788 12.3931 5.32722 12.592 5.24489C12.7909 5.16257 13.0041 5.12019 13.2194 5.12019C13.4347 5.12019 13.6479 5.16257 13.8468 5.24489C14.0457 5.32722 14.2264 5.44788 14.3786 5.59998C14.6076 5.82883 14.7634 6.12032 14.8265 6.4376C14.8896 6.75488 14.857 7.08371 14.7329 7.38253C14.6089 7.68134 14.3989 7.93672 14.1295 8.1164C13.8601 8.29607 13.5434 8.39197 13.2194 8.39197C12.8955 8.39197 12.5788 8.29607 12.3094 8.1164C12.04 7.93672 11.83 7.68134 11.7059 7.38253C11.5819 7.08371 11.5493 6.75488 11.6124 6.4376C11.6754 6.12032 11.8313 5.82883 12.0603 5.59998ZM2.81969 17.1821C4.33608 17.1389 5.78777 16.5591 6.91569 15.5462L4.45809 13.0923C2.81969 13.9103 2.81969 17.1821 2.81969 17.1821Z" />
                            </svg>
                          </span>
                          Affiliate Program
                        </p>
                      </Link>

                      <hr className="header_drop_line my-2" />

                      <Link to={""}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          Log Out
                        </p>
                      </Link>
                    </div>
                  ) : (
                    <div className="header_drop_cont position-absolute">
                      <Link to={"/account/wishlist"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center position-relative">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path>
                            </svg>
                          </span>
                          Wishlist
                          <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                            2
                          </span>
                        </p>
                      </Link>
                      <Link to={"/affiliate"}>
                        <p className="header_drop_text d-flex gap-2 align-items-center">
                          <span className="icon">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2891 12.9615C13.2891 12.9615 15.632 10.6385 16.4266 9.82056C18.9415 7.36673 17.6882 2.31184 17.6882 2.31184C17.6882 2.31184 12.6501 1.06039 10.1925 3.57148C8.27556 5.43639 7.03038 6.72874 7.03038 6.72874C7.03038 6.72874 3.88465 6.07438 2.00049 7.95565L12.0357 18C13.9198 16.0942 13.2891 12.9615 13.2891 12.9615ZM12.0603 5.59998C12.2124 5.44788 12.3931 5.32722 12.592 5.24489C12.7909 5.16257 13.0041 5.12019 13.2194 5.12019C13.4347 5.12019 13.6479 5.16257 13.8468 5.24489C14.0457 5.32722 14.2264 5.44788 14.3786 5.59998C14.6076 5.82883 14.7634 6.12032 14.8265 6.4376C14.8896 6.75488 14.857 7.08371 14.7329 7.38253C14.6089 7.68134 14.3989 7.93672 14.1295 8.1164C13.8601 8.29607 13.5434 8.39197 13.2194 8.39197C12.8955 8.39197 12.5788 8.29607 12.3094 8.1164C12.04 7.93672 11.83 7.68134 11.7059 7.38253C11.5819 7.08371 11.5493 6.75488 11.6124 6.4376C11.6754 6.12032 11.8313 5.82883 12.0603 5.59998ZM2.81969 17.1821C4.33608 17.1389 5.78777 16.5591 6.91569 15.5462L4.45809 13.0923C2.81969 13.9103 2.81969 17.1821 2.81969 17.1821Z" />
                            </svg>
                          </span>
                          Affiliate program
                        </p>
                      </Link>

                      <hr className="header_drop_line mt-2 mb-3" />

                      <p className="header_drop_head">welcome! LOGIN With</p>

                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("login")}>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                          </svg>
                        </span>
                        Facebook
                      </p>
                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("login")}>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"></path>
                          </svg>
                        </span>
                        Google
                      </p>
                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("login")}>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11s-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9s-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12s.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08s.65.47 1.04.47c.42 0 .77-.16 1.07-.47s.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4s-4.07.77-5.65 2.35S4 9.81 4 12s.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></path>
                          </svg>
                        </span>
                        Login with email
                      </p>

                      <hr className="header_drop_line mt-2 mb-3" />

                      <p className="header_drop_head">
                        {"Don't have an account?"}
                      </p>

                      <p
                        className="header_drop_text d-flex gap-2 align-items-center"
                        role="button"
                        onClick={() => OpenModal("register")}>
                        Sign up now!
                      </p>
                    </div>
                  )
                }
              />

              <Link to={"/cart"}>
                <div className="header_cart active d-flex gap-1 align-items-center position-relative">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="header_cart_num d-flex justify-content-center align-items-center position-absolute">
                    2
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Search Box */}
          <MobileSearch isOpen={isSearchOpen} onClose={CloseSearchBar} />
        </div>

        {isSideMenuOpen ? (
          <div className="mob_menu_con d-flex flex-column position-absolute">
            {isAccount ? (
              <AccountSideBarContent activeLink={activeLink} />
            ) : (
              <MenuSideBarContent
                activeCategory={activeCategory}
                activeLink={activeLink}
              />
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Main Header */}
      <div
        className={
          headerBg +
          " header_con justify-content-end align-items-center " +
          (isVisible ? "d-none d-lg-flex" : "d-none")
        }>
        {isAccount ? (
          <div className="d-flex align-items-center gap-2 me-auto">
            <Link to={"/"}>
              <span className="crumb_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"
                  />
                </svg>
              </span>
            </Link>
            {breadCrumsList}
          </div>
        ) : (
          <div className="col header_search_con d-flex align-items-center position-relative me-4">
            <div className="col-auto position-relative ps-3 me-2" role="button">
              <CustomDropdown
                trigger={(isOpen) => (
                  <p
                    className={
                      "header_search_sel d-flex gap-2 align-items-center " +
                      (isOpen ? "text-white" : "")
                    }>
                    <span className={"icon " + (isOpen ? "text-white" : "")}>
                      <svg
                        className=" me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M3 5a2 2 0 0 1 2-2h6v8H3zm8 8H3v6a2 2 0 0 0 2 2h6zm2 8h6a2 2 0 0 0 2-2v-6h-8zm0-10V3h6a2 2 0 0 1 2 2v6z"
                          />
                        </g>
                      </svg>
                    </span>
                    View All Games
                    <span className={"icon " + (isOpen ? "rotate" : "")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 9l-7 7l-7-7"></path>
                      </svg>
                    </span>
                  </p>
                )}
                content={
                  <div className="header_drop_cont sel position-absolute">
                    <p
                      className="header_drop_cate active d-flex gap-2 align-items-center position-relative"
                      role="button">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path>
                        </svg>
                      </span>
                      All Categories
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      PSN
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      NINTENDO
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      Gift Cards
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      PC Gaming
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      Skins
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      Software
                    </p>
                    <p
                      className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                      role="button">
                      VR Games
                    </p>
                  </div>
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="header_search"
                placeholder="Find your games..."
                value={searchInput}
                onChange={handleSearchInput}
              />
            </div>
            {/* Search Result */}
            <SearchResult isOpen={isSearchResultOpen} />
          </div>
        )}

        {/* <Link to={"/how-to-sell"} className="d-none d-xl-block">
          <button type="button" className="main_button me-3">
            Sell now
          </button>
        </Link> */}

        <div className="col-auto d-flex align-items-center position-relative">
          <CustomDropdown
            trigger={() => (
              <div
                className="header_cart active d-flex align-items-center position-relative me-3"
                role="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.88em"
                  height="1em"
                  viewBox="0 0 21 24">
                  <path
                    fill="currentColor"
                    d="M19.945 15.512c-.8-.786-1.619-1.6-1.619-5.44a7.835 7.835 0 0 0-6.539-7.717l-.046-.006a1.5 1.5 0 1 0-2.471.005l-.003-.005c-3.753.623-6.579 3.843-6.584 7.723v.001c0 3.84-.822 4.655-1.619 5.44A3.135 3.135 0 0 0 3.137 21h4.367a3 3 0 1 0 6 0h4.37a3.135 3.135 0 0 0 2.076-5.484l-.003-.003zm-9.441 6.613A1.127 1.127 0 0 1 9.379 21h2.251a1.127 1.127 0 0 1-1.126 1.125m7.36-3.376H3.138a.886.886 0 0 1-.625-1.509c1.34-1.34 2.418-2.612 2.418-7.17a5.572 5.572 0 0 1 11.144 0c0 4.578 1.089 5.84 2.418 7.17a.886.886 0 0 1-.625 1.509z"></path>
                </svg>
                <span className="header_cart_num d-flex justify-content-center align-items-center position-absolute">
                  2
                </span>
              </div>
            )}
            content={
              <div className="header_drop_cont big position-absolute">
                <Link to={"/account/notifications"}>
                  <div className="col-12 d-flex align-items-center gap-2 px-2">
                    <div className="col-auto">
                      <img
                        src={"../assets/images/game1.png"}
                        alt=""
                        className="acct_noti_img small"
                      />
                    </div>
                    <div className="col">
                      <p className="acct_noti_title text-truncate col-8">
                        Tekken 8 Xbox Series X | S Private Account Global
                      </p>
                      <p className="acct_noti_date small">December 19, 2013</p>
                    </div>
                  </div>
                </Link>
                <hr className="header_drop_line my-1" />
                <Link to={"/account/notifications"}>
                  <div className="col-12 d-flex align-items-center gap-2 px-2">
                    <div className="col-auto">
                      <img
                        src={"../assets/images/game1.png"}
                        alt=""
                        className="acct_noti_img small"
                      />
                    </div>
                    <div className="col">
                      <p className="acct_noti_title text-truncate col-8">
                        Tekken 8 Xbox Series X | S Private Account Global
                      </p>
                      <p className="acct_noti_date small">December 19, 2013</p>
                    </div>
                  </div>
                </Link>
                <hr className="header_drop_line my-1" />
                <Link to={"/account/notifications"}>
                  <div className="col-12 d-flex align-items-center gap-2 px-2">
                    <div className="col-auto">
                      <img
                        src={"../assets/images/game1.png"}
                        alt=""
                        className="acct_noti_img small"
                      />
                    </div>
                    <div className="col">
                      <p className="acct_noti_title text-truncate col-8">
                        Tekken 8 Xbox Series X | S Private Account Global
                      </p>
                      <p className="acct_noti_date small">December 19, 2013</p>
                    </div>
                  </div>
                </Link>
                <hr className="header_drop_line my-1" />

                <Link to={"/account/notifications"}>
                  <p className="header_drop_text text-center">See All</p>
                </Link>
              </div>
            }
          />

          <CustomDropdown
            trigger={(isOpen) => (
              <div
                className="header_user d-flex gap-2 align-items-center me-3"
                role="button">
                {user ? (
                 <Avatar user={user} />
                ) : (
                  <img
                    src={"../assets/images/user.png"}
                    alt=""
                    className="header_user_img"
                  />
                )}
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"
                    />
                  </svg>
                )}
              </div>
            )}
            content={
              user ? (
               <UserDetails user={user} />
              ) : (
                <div className="header_drop_cont position-absolute">
                  <Link to={"/account/wishlist"}>
                    <p className="header_drop_text d-flex gap-2 align-items-center position-relative">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path>
                        </svg>
                      </span>
                      Wishlist
                      <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
                        2
                      </span>
                    </p>
                  </Link>
                  <Link to={"/affiliate"}>
                    <p className="header_drop_text d-flex gap-2 align-items-center">
                      <span className="icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.2891 12.9615C13.2891 12.9615 15.632 10.6385 16.4266 9.82056C18.9415 7.36673 17.6882 2.31184 17.6882 2.31184C17.6882 2.31184 12.6501 1.06039 10.1925 3.57148C8.27556 5.43639 7.03038 6.72874 7.03038 6.72874C7.03038 6.72874 3.88465 6.07438 2.00049 7.95565L12.0357 18C13.9198 16.0942 13.2891 12.9615 13.2891 12.9615ZM12.0603 5.59998C12.2124 5.44788 12.3931 5.32722 12.592 5.24489C12.7909 5.16257 13.0041 5.12019 13.2194 5.12019C13.4347 5.12019 13.6479 5.16257 13.8468 5.24489C14.0457 5.32722 14.2264 5.44788 14.3786 5.59998C14.6076 5.82883 14.7634 6.12032 14.8265 6.4376C14.8896 6.75488 14.857 7.08371 14.7329 7.38253C14.6089 7.68134 14.3989 7.93672 14.1295 8.1164C13.8601 8.29607 13.5434 8.39197 13.2194 8.39197C12.8955 8.39197 12.5788 8.29607 12.3094 8.1164C12.04 7.93672 11.83 7.68134 11.7059 7.38253C11.5819 7.08371 11.5493 6.75488 11.6124 6.4376C11.6754 6.12032 11.8313 5.82883 12.0603 5.59998ZM2.81969 17.1821C4.33608 17.1389 5.78777 16.5591 6.91569 15.5462L4.45809 13.0923C2.81969 13.9103 2.81969 17.1821 2.81969 17.1821Z" />
                        </svg>
                      </span>
                      Affiliate program
                    </p>
                  </Link>

                  <hr className="header_drop_line mt-2 mb-3" />

                  <p className="header_drop_head">welcome! LOGIN With</p>

                  <p
                    className="header_drop_text d-flex gap-2 align-items-center"
                    role="button"
                    onClick={() => OpenModal("login")}>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                      </svg>
                    </span>
                    Facebook
                  </p>
                  <p
                    className="header_drop_text d-flex gap-2 align-items-center"
                    role="button"
                    onClick={() => OpenModal("login")}>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"></path>
                      </svg>
                    </span>
                    Google
                  </p>
                  <p
                    className="header_drop_text d-flex gap-2 align-items-center"
                    role="button"
                    onClick={() => OpenModal("login")}>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11s-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9s-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12s.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08s.65.47 1.04.47c.42 0 .77-.16 1.07-.47s.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4s-4.07.77-5.65 2.35S4 9.81 4 12s.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></path>
                      </svg>
                    </span>
                    Login with email
                  </p>

                  <hr className="header_drop_line mt-2 mb-3" />

                  <p className="header_drop_head">{"Don't have an account?"}</p>

                  <p
                    className="header_drop_text d-flex gap-2 align-items-center"
                    role="button"
                    onClick={() => OpenModal("register")}>
                    Sign up now!
                  </p>
                </div>
              )
            }></CustomDropdown>

          <Link to={"/cart"}>
            <div className="header_cart active d-flex align-items-center position-relative">
              <svg
                className="me-1"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                  clipRule="evenodd"
                />
              </svg>
              $89.11
              <span className="header_cart_num d-flex justify-content-center align-items-center position-absolute">
                2
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
