import React from "react";
import { css, cx } from "emotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const LoadingIndicator = function({ loading }) {
  const className = css`
    @keyframes infinite-scale {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }

    position: fixed;
    font-size: 32px;
    color: #111;
    line-height: 32px;
    top: 20px;
    right: 20px;

    animation: infinite-scale 0.4s ease-in-out infinite;
    animation-delay: 200ms;
    animation-play-state: ${loading ? "running" : "paused"};

    &-apear-enter,
    &-enter {
      opacity: 0;
    }

    &-apear-active,
    &-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-out;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0;
      transition: opacity 1000ms ease-out;
    }
  `;

  return (
    <TransitionGroup>
      {loading ? (
        <CSSTransition
          timeout={{ enter: 300, exit: 1000 }}
          classNames={className}
        >
          <div className={className}>👾</div>
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  );
};
