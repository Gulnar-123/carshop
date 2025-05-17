// Filename - components/Rating.js

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyle";
const Rate = (props) => {
    const [rate, setRate] = useState(0);

    return (
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                                localStorage.setItem("rating", givenRating)
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "rgb(245, 201, 78)"
                                        : "rgb(192, 192, 192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    );
};

export default Rate;