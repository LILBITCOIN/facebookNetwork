import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './users.module.css';
import Pagination from './../common/pagination/pagination';


let Users = (props) => {

    return (
        <div className={styles.usersWrapp} >
            <div className={styles.postsWrapper} >

                {props.usersData.map(u => <div className={styles.main}
                                               key={u.id} >
                    <div >
                        <div className={styles.info} >
                            <div >
                                <NavLink to={`/profile/${u.id}`} >
                                    <img className={styles.photo}
                                         src={u.photos.small != null
                                             ? u.photos.small
                                             : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBudYOgApxyKdCiOitPW_M3ExiWxNp-JBuVQ&usqp=CAU'} />
                                </NavLink >
                                <span >
                                <span className={styles.name} >{u.name}</span >
                                    {u.status
                                        ? <span className={styles.status} >Status: {u.status}</span >
                                        : <span className={styles.status} >Status: ...</span >
                                    }
                            </span >

                            </div >
                            <div >
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.unfollowThunk(u.id);
                                              }} >Unfollow</button >
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.followThunk(u.id);
                                              }} >Follow</button >}
                            </div >
                        </div >

                    </div >
                </div >)}
            </div >
            <Pagination
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
        </div >
    );
}

export default Users;
