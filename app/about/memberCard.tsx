import React from 'react';
import styles from '../../styles/memberCard.module.css';

interface MemberCardProps {
    imageSrc: string;
    memberName: string;
    memberDesignation: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ imageSrc, memberName, memberDesignation }) => {
    return (
        <div className={styles.member}>
            <div className={styles.circle}>
                <img src={imageSrc} alt={memberName} />
                <div className={styles.overlay}>
                    <a href="#">
                        <img src="/images/instagram_hero.svg" alt="instagram" width={50} height={50} />
                    </a>
                    <a href="#">
                        <img src="/images/facebook_hero.svg" alt="Facebook" width={50} height={50} />
                    </a>
                    <a href="#">
                        <img src="/images/linkedIn_hero.svg" alt="LinkedIn" width={50} height={50} />
                    </a>
                </div>
            </div>
            <p className={styles.memberName}>{memberName}</p>
            <p className={styles.memberDesignation}>{memberDesignation}</p>
        </div>
    );
};

export default MemberCard;
