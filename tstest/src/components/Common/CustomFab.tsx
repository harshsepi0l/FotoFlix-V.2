import Fab from '@mui/material/Fab';
import { SxProps } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Axios from "axios";

const fabStyle = {
    position: 'fixed',
    bottom: 20,
    right: 20,
};


export const CustomFab = (): JSX.Element => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({
        query: "(max-width: 786px)",
      });
      
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        Axios.get("https://fotoflix.herokuapp.com/Cloudinary/byUID").then(
            (response) => {
                if (response.data.error) {
                    setIsLoggedIn(false);
                } else {
                    setIsLoggedIn(true);
                }
            }
        );
    }, []);

    const fab =
    {
        sx: fabStyle as SxProps,
        icon: <AddIcon />,
        label: 'Add',
    };


    return (
        <div>
            {isLoggedIn && isMobile && (
                <Fab
                    sx={fab.sx}
                    aria-label={fab.label}
                    style={{
                        backgroundColor: 'var(--darkpurple)',
                        color: 'var(--white)',
                    }}
                    onClick={() => navigate('/UploadForm')}
                >
                    {fab.icon}
                </Fab >
            )}
        </div>
    );
};

