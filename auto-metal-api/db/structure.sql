--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: albums; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE albums (
    id integer NOT NULL,
    name character varying,
    popularity integer,
    release_date timestamp without time zone,
    big_image character varying,
    medium_image character varying,
    small_image character varying,
    number_of_tracks integer,
    open character varying,
    spotify_album_id character varying,
    record_label_id integer,
    artist_id integer,
    genre_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE albums_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE albums_id_seq OWNED BY albums.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: artists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE artists (
    id integer NOT NULL,
    name character varying,
    popularity integer,
    open character varying,
    followers integer,
    big_image character varying,
    medium_image character varying,
    small_image character varying,
    related_artists json,
    spotify_albums json,
    top_tracks json,
    spotify_artist_id character varying,
    record_label_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: artists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE artists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: artists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE artists_id_seq OWNED BY artists.id;


--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE genres (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE genres_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE genres_id_seq OWNED BY genres.id;


--
-- Name: record_labels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE record_labels (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: record_labels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE record_labels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: record_labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE record_labels_id_seq OWNED BY record_labels.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: song_genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE song_genres (
    id integer NOT NULL,
    song_id integer,
    genre_id integer
);


--
-- Name: song_genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE song_genres_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: song_genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE song_genres_id_seq OWNED BY song_genres.id;


--
-- Name: songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE songs (
    id integer NOT NULL,
    name character varying,
    popularity integer,
    length integer,
    track_number integer,
    disc_number integer,
    preview character varying,
    open character varying,
    audio_analysis json,
    related_songs json,
    spotify_song_id character varying,
    artist_id character varying,
    album_id integer,
    record_label_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE songs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE songs_id_seq OWNED BY songs.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE users (
    id integer NOT NULL,
    name character varying,
    email character varying,
    password_digest character varying,
    spotify_token character varying,
    uid character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY albums ALTER COLUMN id SET DEFAULT nextval('albums_id_seq'::regclass);


--
-- Name: artists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY artists ALTER COLUMN id SET DEFAULT nextval('artists_id_seq'::regclass);


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY genres ALTER COLUMN id SET DEFAULT nextval('genres_id_seq'::regclass);


--
-- Name: record_labels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY record_labels ALTER COLUMN id SET DEFAULT nextval('record_labels_id_seq'::regclass);


--
-- Name: song_genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY song_genres ALTER COLUMN id SET DEFAULT nextval('song_genres_id_seq'::regclass);


--
-- Name: songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY songs ALTER COLUMN id SET DEFAULT nextval('songs_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: record_labels record_labels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY record_labels
    ADD CONSTRAINT record_labels_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: song_genres song_genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY song_genres
    ADD CONSTRAINT song_genres_pkey PRIMARY KEY (id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('20170608213457'),
('20170608213852'),
('20170608214103'),
('20170608214152'),
('20170608214303'),
('20170608222606'),
('20170609230235');


