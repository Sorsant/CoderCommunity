import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommunity, getAllLanguages } from "../../components/Redux/Actions/Get/action-get";
import styles from "./detailCommunity.module.css";

const DetailCommunity = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const languages = useSelector((state) => state.languages);

    const [community, setCommunity] = useState({});

    useEffect(() => {
        dispatch(getCommunity(id))
            .then((response) => {
                setCommunity(response.payload);
            })
            .catch((error) => {
                window.alert("Community not found");
            });

        dispatch(getAllLanguages());
    }, [dispatch, id]);

    const getLanguageNames = () => {
        if (Array.isArray(community.language)) {
            return community.language.map((languageId) => {
                const language = languages.find((lang) => lang.id === languageId);
                return language ? language.name : "";
            });
        } else {
            const language = languages.find((lang) => lang.id === community.language);
            return language ? [language.name] : [];
        }
    };

    const languageNames = getLanguageNames();

    return (
        <div className={styles.container}>
            <h1 className={styles.name}>{community.name}</h1>
            <img src={community.image} alt={community.image} className={styles.image} />
            <p className={styles.language}>{languageNames.join(", ")}</p>
            <p className={styles.description}>{community.description}</p>
        </div>
    );
};

export default DetailCommunity;
