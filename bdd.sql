--
-- code pour la création des tables
--
CREATE TABLE Montre(
    id uuid  NOT NULL,
    ecran text,
    bracelet text,
    boitier_exterieure text,
    boitier_intérieur text,
    Commande text,
    id_user uuid,
    Matériel_bracelet uuid,
    Matériel_boitier uuid,
    primary key (id),
    foreign key (id_user) references auth.users(id),
    foreign key (Matériel_boitier,Matériel_bracelet) references Matériel (code)
    foreign key (Matériel_bracelet) references Matériel (code)
);
CREATE TABLE Matériel
(
    code int PRIMARY KEY NOT NULL,
    Libelle text,
    URL VARCHAR
);
CREATE TABLE Profil
(
    id uuid  NOT NULL,
    Email VARCHAR,
    foreign key (id) references auth.users (id),
    foreign key (Email) references auth.users(Email)
);

--
-- code pour la création des vues
--
create view allMatériel as
select *
from "Matériel";

create view allMontre as
select *
from "Montre";

CREATE VIEW Montrepasvendu as
SELECT * FROM "Montre"
WHERE "Commande" = false;

CREATE VIEW MontreVendu as
SELECT * FROM "Montre"
WHERE "Commande" = true;


--
-- code pour la création des policies
--

CREATE POLICY "Autoriser les utilisateurs à composé leurs Montre"
    ON "Montre" WITH CHECK (true);

CREATE POLICY "Autoriser les utilisateurs à modifier seulement leurs Montre"
on "Montre" for update to authenticated using ((auth.uid() = id_user) AND ("Commande" = false))
with check (auth.uid() in (Select id_user from "Montre"));

CREATE POLICY "Enable read access for all users" ON
    "Montre" USING ((auth.uid() = id_user));
