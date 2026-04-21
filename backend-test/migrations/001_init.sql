CREATE TABLE IF NOT EXISTS public.users
(
    id character varying(20) COLLATE pg_catalog."default" NOT NULL,
    count integer DEFAULT 0,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.saves
(
    id character varying(20) COLLATE pg_catalog."default" NOT NULL,
    group_id character varying(20) COLLATE pg_catalog."default",
    value integer,
    "timestamp" bigint,
    CONSTRAINT saves_pkey PRIMARY KEY (id),
    CONSTRAINT saves_group_id_fkey FOREIGN KEY (group_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);